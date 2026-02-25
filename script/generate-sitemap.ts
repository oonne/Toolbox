/**
 * 根据 src/constant/pages.ts 中的路由生成 sitemap.xml，输出到 public/sitemap.xml
 * 从项目根目录的 .env 文件读取 WEBSITE_URL，若不存在则使用默认值。
 */

import {
  readFileSync, writeFileSync, mkdirSync, existsSync,
} from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const root = join(scriptDir, '..');

function loadEnv(envPath: string): Record<string, string> {
  const result: Record<string, string> = {};
  if (!existsSync(envPath)) return result;
  const content = readFileSync(envPath, 'utf8');
  content.split('\n').forEach((line) => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const eq = trimmed.indexOf('=');
      if (eq > 0) {
        const key = trimmed.slice(0, eq).trim();
        let value = trimmed.slice(eq + 1).trim();
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
          value = value.slice(1, -1);
        }
        result[key] = value;
      }
    }
  });
  return result;
}

const env = loadEnv(join(root, '.env'));
const baseUrl = env.WEBSITE_URL ?? 'https://oonne.com';
const baseUrlClean = baseUrl.replace(/\/$/, '');

const pagesPath = join(root, 'src/constant/pages.ts');
const content = readFileSync(pagesPath, 'utf8');

// 匹配 path: '/xxx' 或 path: "/xxx"
const pathRe = /path:\s*['"]([^'"]+)['"]/g;
const paths: string[] = [];
let m = pathRe.exec(content);
while (m !== null) {
  const path = m[1];
  if (!path.startsWith('/:')) paths.push(path);
  m = pathRe.exec(content);
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const urls = paths
  .map((path) => {
    const loc = `${baseUrlClean}${path === '/' ? '' : path}`;
    const priority = path === '/' ? '1.0' : '0.8';
    return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
  })
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const outDir = join(root, 'public');
const outPath = join(outDir, 'sitemap.xml');
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, sitemap, 'utf8');

// eslint-disable-next-line no-console -- CLI 脚本输出
console.log(`sitemap.xml 已生成: ${outPath} (${paths.length} 条)`);
