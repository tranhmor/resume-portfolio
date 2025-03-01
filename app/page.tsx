import Header from '@/components/resume/header';
import Skills from '@/components/resume/skills';
import Experience from '@/components/resume/experience';
import Projects from '@/components/resume/projects';
import Education from '@/components/resume/education';
import OtherDimensions from '@/components/resume/other-dimensions';
import PdfButtonWrapper from '@/components/ui/pdf-button-wrapper';
import { resumeData } from '@/lib/resume-data';
import Script from 'next/script';

export default function Home() {
  // 创建结构化数据
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: resumeData.name,
    jobTitle: resumeData.title,
    email: resumeData.email,
    telephone: resumeData.phone,
    url: resumeData.blog,
    sameAs: [
      resumeData.github,
      resumeData.blog,
    ],
    worksFor: {
      '@type': 'Organization',
      name: resumeData.workExperience[0].company
    },
    alumniOf: resumeData.educations.map(edu => ({
      '@type': 'EducationalOrganization',
      name: edu.university,
      department: edu.major
    })),
    knowsAbout: [...resumeData.skills.frontend, ...resumeData.skills.fullstack, ...resumeData.skills.engineering],
  };

  return (
    <>
      <Script id="resume-jsonld" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
      
      <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-sm shadow-xl rounded-xl overflow-hidden resume-container">
          <div className="flex flex-col md:flex-row">
            {/* 左侧边栏 */}
            <div className="w-full flex flex-col gap-4 md:w-1/3 bg-gradient-to-br from-purple-50 to-indigo-100 backdrop-blur-sm p-8 rounded-bl-xl">
              <Header />
              <Skills />
              <Education />
              <OtherDimensions />
            </div>
            
            {/* 右侧主内容 */}
            <div className="w-full md:w-2/3 flex flex-col gap-4 p-8 bg-white">
              <Experience />
              <Projects />
            </div>
          </div>
        </div>
        <PdfButtonWrapper />

        {/* 添加语义化HTML元素以增强SEO */}
        <footer className="mt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {resumeData.name} - {resumeData.title}</p>
          <p className="mt-1">
            联系方式: <a href={`mailto:${resumeData.email}`} className="hover:underline">{resumeData.email}</a> | 
            <a href={resumeData.github} className="hover:underline ml-2" target="_blank" rel="noopener noreferrer">GitHub</a> | 
            <a href={resumeData.blog} className="hover:underline ml-2" target="_blank" rel="noopener noreferrer">个人博客</a>
          </p>
        </footer>
      </main>
    </>
  );
}