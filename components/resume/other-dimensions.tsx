import { resumeData } from "@/lib/resume-data";

export default function OtherDimensions() {
  return (
    <section>
      <h2 className="text-xl font-bold text-gray-800 mb-3 pb-1 border-b border-indigo-200">其他维度</h2>
      <ul className="list-none space-y-2 pl-1 text-sm">
        {resumeData.otherDimensions.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-indigo-600 font-bold mr-2">📌</span>
            <span className="text-gray-500">{item.title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
} 