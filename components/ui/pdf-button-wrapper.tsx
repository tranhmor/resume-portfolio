"use client";

import dynamic from 'next/dynamic';

// 在客户端组件中动态导入
const FloatingPdfButton = dynamic(
  () => import('@/components/ui/floating-pdf-button'),
  { ssr: false }
);

export default function PdfButtonWrapper() {
  return <FloatingPdfButton />;
} 