import { resumeData } from "@/lib/resume-data";
import { Building2 } from "lucide-react";

export default function Experience() {
  return (
    <section>
      <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">工作经历</h2>
      
      <div className="grid grid-cols-1 gap-3">
        {resumeData.workExperience.map((job, index) => (
          <div key={index} className="flex flex-col md:flex-row">
            <div className="hidden md:block mb-3 md:mb-0 md:mr-4 flex-shrink-0">
              <div className="w-12 h-12 bg-indigo-50 rounded-md flex items-center justify-center">
                <Building2 className="w-6 h-6 text-indigo-500" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{job.position}</h3>
                  <p className="text-indigo-600 font-semibold">{job.company}</p>
                </div>
                <div className="mt-1 md:mt-0 md:text-right">
                  <span className="text-sm text-gray-600">{job.duration}</span>
                </div>
              </div>
              <p className="mt-1 text-sm text-gray-600 tracking-wider">
                {job.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 