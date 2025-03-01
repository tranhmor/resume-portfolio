// import Image from 'next/image';
import { FaEnvelope, FaGlobe, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
// import { SiGithub } from 'react-icons/si';
import { resumeData } from "@/lib/resume-data";

export default function Header() {
  return (
      <section className="w-full bg-gradient-to-br from-purple-50 to-indigo-100 backdrop-blur-sm p-8 rounded-l-xl ">
        <div className="flex flex-col items-center mb-4">
          <div className="relative w-40 h-40 mb-4 overflow-hidden rounded-full border-4 border-white shadow-md">
            {/* <Image
              src={resumeData.avatar}
              alt="个人照片"
              fill
              className="object-cover"
            /> */}
          </div>
          <h1 className="text-2xl font-bold text-gray-800">{resumeData.name}</h1>
          <p className="text-indigo-600 font-medium">{resumeData.title}</p>
          
          {/* <div className="mt-4 text-center">
            <p className="text-gray-600 italic text-sm">
              &ldquo;设计的完成不在于没有东西可以添加，而在于没有东西可以删除。&rdquo;
            </p>
            <p className="text-gray-500 text-xs mt-1">— 圣埃克苏佩里</p>
          </div> */}
        </div>

        <div className="space-y-3">
          <div className="flex items-center">
            <FaEnvelope className="text-indigo-500 mr-3" />
            <span className="text-gray-700 text-sm">{resumeData.email}</span>
          </div>
          <div className="flex items-center">
            <FaGlobe className="text-indigo-500 mr-3" />
            <span className="text-gray-700 text-sm">{resumeData.blog}</span>
          </div>
          <div className="flex items-center">
            <FaPhone className="text-indigo-500 mr-3" />
            <span className="text-gray-700 text-sm">{resumeData.phone}</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-indigo-500 mr-3" />
            <span className="text-gray-700 text-sm">{resumeData.location}</span>
          </div>
        </div>
      </section>
  );
} 