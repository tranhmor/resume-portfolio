import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { resumeData } from '@/lib/resume-data'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${resumeData.name} - ${resumeData.title} | 个人简历`,
  description: `${resumeData.name}的个人简历 - ${resumeData.title}。专长包括${resumeData.skills.frontend.join('、')}等前端技术。${resumeData.workExperience[0].description}`,
  keywords: ['前端开发', 'React', 'Next.js', resumeData.name, resumeData.title, '简历', '求职'],
  authors: [{ name: resumeData.name, url: resumeData.blog }],
  openGraph: {
    type: 'profile',
    title: `${resumeData.name} - ${resumeData.title} | 个人简历`,
    description: `${resumeData.name}的个人简历 - ${resumeData.title}。拥有${resumeData.workExperience[0].company}工作经验。`,
    images: [{ url: resumeData.avatar, width: 300, height: 300, alt: resumeData.name }],
  },
  twitter: {
    card: 'summary',
    title: `${resumeData.name} - ${resumeData.title}`,
    description: `前端开发工程师${resumeData.name}的个人简历`,
    images: [resumeData.avatar],
  },
  alternates: {
    canonical: '/',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 