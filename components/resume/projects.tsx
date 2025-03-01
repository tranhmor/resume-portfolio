import { resumeData } from "@/lib/resume-data";
import { FolderKanban, Code, Briefcase, Layout, GitBranch } from "lucide-react";

export default function Projects() {
  // 根据项目类型选择图标的函数
  const getIconForProjectType = (index: number) => {
    switch (index) {
      case 0:
        return <Code className="w-6 h-6 text-indigo-600" />;
      case 1:
        return <Layout className="w-6 h-6 text-indigo-600" />;
      case 2:
        return <FolderKanban className="w-6 h-6 text-indigo-600" />;
      case 3:
        return <GitBranch className="w-6 h-6 text-indigo-600" />;
      default:
        return <Briefcase className="w-6 h-6 text-indigo-600" />;
    }
  };

  return (
    <section>
      <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">项目经历</h2>
      
      <div className="flex flex-col gap-3 tracking-wider">
        {resumeData.projects.map((project, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4 gap-1 flex flex-col">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
              <div className="flex items-center mb-2 md:mb-0">
                <div className="flex w-10 h-10 bg-indigo-100 rounded-md items-center justify-center mr-3">
                  {getIconForProjectType(index)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{project.name}</h3>
                  <p className="text-xs text-gray-500">{project.type}</p>
                </div>
              </div>
              <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-md self-start md:self-auto">
                {project.role}
              </span>
            </div>
            
            <p className="text-xs text-gray-500">
              {project.description}
            </p>
            
            <div className="text-sm flex flex-col md:flex-row items-start md:items-center justify-start gap-1 md:mt-2">
              <span className="font-medium text-gray-600 whitespace-nowrap">技术栈 {' 👉 '}</span>
              <div className="flex flex-wrap gap-1">
                {project.tech.split('+').map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="bg-gray-100 text-xs border text-gray-500 px-1 py-0.5 rounded-md inline-block"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="text-sm flex flex-col gap-1 mt-1">
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {project.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-xs md:text-sm">{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 