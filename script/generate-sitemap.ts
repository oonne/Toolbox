/**
 * 根据 src/constant/pages.ts 中的路由生成 sitemap.xml，输出到 public/sitemap.xml
 * 使用方式: SITEMAP_BASE_URL=https://yoursite.com pnpm run generate-sitemap
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const root = join(scriptDir, '..');

const baseUrl = process.env.SITEMAP_BASE_URL ?? 'https://example.com';
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

console.log(`sitemap.xml 已生成: ${outPath} (${paths.length} 条)`);
