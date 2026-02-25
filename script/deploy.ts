import { execSync, spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

// 从环境变量读取，部署前请设置或写入 .env
const SERVER_CONFIG = {
  host: '39.99.146.30',
  user: 'root',
  remotePath: process.env.DEPLOY_REMOTE_PATH || '/data/web/toolbox',
  localPath: path.join(process.cwd(), 'dist'),
};

/**
 * 检查本地构建目录是否存在
 */
function checkLocalFiles(): boolean {
  const { localPath } = SERVER_CONFIG;

  if (!fs.existsSync(localPath)) {
    console.error(`❌ 本地构建目录不存在: ${localPath}`);
    console.log('💡 请先运行 "pnpm run build" 来生成构建文件');
    return false;
  }

  const files = fs.readdirSync(localPath);
  if (files.length === 0) {
    console.error(`❌ 构建目录为空: ${localPath}`);
    console.log('💡 请先运行 "pnpm run build" 来生成构建文件');
    return false;
  }

  console.log(`✅ 本地构建目录检查通过: ${localPath} (包含 ${files.length} 个文件/目录)`);
  return true;
}

/**
 * 测试服务器连接
 */
function testServerConnection(): Promise<boolean> {
  return new Promise((resolve) => {
    const { host, user } = SERVER_CONFIG;

    console.log(`🔗 测试服务器连接: ${user}@${host}...`);

    try {
      execSync(
        `ssh -o ConnectTimeout=10 -o StrictHostKeyChecking=no ${user}@${host} "echo 'Connection test successful'"`,
        {
          stdio: 'pipe',
          timeout: 15000,
        },
      );
      console.log('✅ 服务器连接成功');
      resolve(true);
    } catch (error) {
      console.error(`❌ 服务器连接失败: ${error}`);
      resolve(false);
    }
  });
}

/**
 * 安全上传文件（不删除现有文件）
 */
function uploadFilesSafe(): Promise<boolean> {
  return new Promise((resolve) => {
    const {
      host, user, remotePath, localPath,
    } = SERVER_CONFIG;

    console.log('🚀 开始安全上传文件（保留现有文件）...');
    console.log(`   本地: ${localPath}/`);
    console.log(`   远程: ${user}@${host}:${remotePath}/`);

    const rsyncCommand = [
      'rsync',
      '-avz',
      '--progress',
      '--exclude=.DS_Store',
      `${localPath}/`,
      `${user}@${host}:${remotePath}/`,
    ];

    const rsync = spawn(rsyncCommand[0], rsyncCommand.slice(1), {
      stdio: ['inherit', 'pipe', 'pipe'],
    });

    rsync.stdout?.on('data', (data) => {
      const text = data.toString();
      if (text.includes('%')) {
        process.stdout.write(`\r${text.trim()}`);
      }
    });

    rsync.on('close', (code) => {
      console.log('');
      if (code === 0) {
        console.log('✅ 文件安全上传成功! (现有文件已保留)');
        resolve(true);
      } else {
        console.error(`❌ 文件上传失败，退出代码: ${code}`);
        resolve(false);
      }
    });

    rsync.on('error', (error) => {
      console.error(`❌ rsync执行失败: ${error}`);
      resolve(false);
    });
  });
}

/**
 * 主函数
 */
async function main(): Promise<void> {
  try {
    console.log('🚀 开始安全部署流程（保留现有文件）...');
    console.log('='.repeat(50));

    if (!checkLocalFiles()) {
      process.exit(1);
    }

    if (!(await testServerConnection())) {
      process.exit(1);
    }

    if (!(await uploadFilesSafe())) {
      process.exit(1);
    }

    const websiteUrl = process.env.WEBSITE_URL || 'https://oonne.com';
    console.log('='.repeat(50));
    console.log('🎉 安全部署完成!');
    console.log(`🌐 网站地址: ${websiteUrl}`);
    console.log(`📁 服务器路径: ${SERVER_CONFIG.remotePath}`);
    console.log('ℹ️  服务器上的现有文件已保留');
  } catch (error) {
    console.error('❌ 部署过程中发生错误:', error);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error('❌ 未处理的错误:', error);
  process.exit(1);
});
