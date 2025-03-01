import React from "react";

export function ResumeContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl shadow-xl max-w-5xl mx-auto overflow-hidden">
      {children}
    </div>
  );
} 