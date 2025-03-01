import { resumeData } from "@/lib/resume-data";

export default function Education() {
  return (
    <section>
      <h2 className="text-xl font-bold text-gray-800 mb-3 pb-1 border-b border-indigo-200">教育经历</h2>
      <div className="grid grid-cols-1 gap-3">
      {resumeData.educations.map((education, index) => (
      <div key={index} className="bg-white/60 rounded-md p-4 shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-lg font-semibold text-gray-800">{education.university}</h3>
        
        <div className="mt-2 flex flex-col gap-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-gray-700 text-sm">{education.major}</p>
            <span className="text-indigo-600 font-medium text-xs bg-indigo-100 px-2 py-0.5 rounded-md">{education.degree}</span>
          </div>
          <span className="text-sm text-gray-600">{education.duration}</span>
        </div>
      </div>))}
      </div>
    </section>
  );
} 