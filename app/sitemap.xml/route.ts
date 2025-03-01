// 删除未使用的导入
// import { resumeData } from '@/lib/resume-data';

export async function GET() {
  // 获取当前域名，生产环境使用实际域名
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://xuhaoran-resume.vercel.app/';
  
  // 创建sitemap XML内容
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${baseUrl}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
      </url>
    </urlset>`;
  
  // 返回XML格式的响应
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 