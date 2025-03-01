import { resumeData } from "@/lib/resume-data";

export default function Skills() {
  return (
    <section>
      <h2 className="text-lg font-semibold text-gray-800 mb-3 border-b border-indigo-200 pb-1">技能优势</h2>
      <div className="flex flex-col gap-3">
      <div>
        <h3 className="text-md font-medium text-indigo-600 mb-2">前端技术</h3>
        <div className="flex flex-wrap gap-2">
          {resumeData.skills.frontend.map((skill, index) => (
            <div key={index} className="text-sm text-gray-700 mb-1">
              <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
              {skill}
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-md font-medium text-indigo-600 mb-2">工程化</h3>
        <div className="flex flex-wrap gap-2">
          {resumeData.skills.engineering.map((skill, index) => (
            <div key={index} className="text-sm text-gray-700 mb-1">
              <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
              {skill}
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-md font-medium text-indigo-600 mb-2">全栈开发</h3>
        <div className="flex flex-wrap gap-2">
          {resumeData.skills.fullstack.map((skill, index) => (
            <div key={index} className="text-sm text-gray-700 mb-1">
              <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
              {skill}
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h3 className="text-md font-medium text-indigo-600 mb-2">其他技能</h3>
        <div className="flex flex-wrap gap-2">
          {resumeData.skills.other.map((skill, index) => (
            <div key={index} className="text-sm text-gray-700 mb-1">
              <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
              {skill}
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
} 