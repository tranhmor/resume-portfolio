"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import html2canvas from 'html2canvas';

export default function FloatingPdfButton() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [isProcessing, setIsProcessing] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dragStartTimeRef = useRef<number>(0);
  const dragDistanceRef = useRef<number>(0);

  // 初始化按钮位置到屏幕右下角
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPosition({
        x: window.innerWidth - 100,
        y: window.innerHeight - 100
      });
    }
  }, []);

  // 优化后的导出图片函数
  const exportImage = useCallback(async () => {
    // 检查是否可以导出
    if (isProcessing) return;
    if (dragDistanceRef.current > 5 || (Date.now() - dragStartTimeRef.current) > 200) return;
    
    setIsProcessing(true);
    
    const resumeElement = document.querySelector('.resume-container') as HTMLElement;
    if (!resumeElement) {
      setIsProcessing(false);
      return;
    }

    // 显示加载提示
    const loadingToast = document.createElement('div');
    loadingToast.innerText = '正在生成图片，请稍候...';
    loadingToast.style.position = 'fixed';
    loadingToast.style.top = '20px';
    loadingToast.style.left = '50%';
    loadingToast.style.transform = 'translateX(-50%)';
    loadingToast.style.padding = '10px 20px';
    loadingToast.style.background = 'rgba(0,0,0,0.7)';
    loadingToast.style.color = 'white';
    loadingToast.style.borderRadius = '4px';
    loadingToast.style.zIndex = '9999';
    document.body.appendChild(loadingToast);

    try {
      // 直接使用原始元素而不是克隆元素 - 这保留了所有样式上下文
      // 只修改滚动状态以确保捕获全部内容
      const originalScroll = {
        scrollX: window.scrollX,
        scrollY: window.scrollY
      };

      // 确保窗口滚动到最顶部
      window.scrollTo(0, 0);
      
      // 等待字体和样式完全加载
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // 使用更高级的html2canvas配置
      const canvas = await html2canvas(resumeElement, {
        scale: 2, // 更高分辨率
        useCORS: true,
        allowTaint: true, // 允许跨域图像
        logging: false,
        backgroundColor: '#ffffff',
        imageTimeout: 10000, // 增加图像加载超时
        ignoreElements: (element) => {
          // 忽略不需要的元素，如本按钮自身
          return element.classList.contains('floating-pdf-button');
        },
        onclone: (document, clonedNode) => {
          // 在克隆文档上应用额外样式处理
          const stylesheets = Array.from(document.styleSheets);
          const inlineStyles = stylesheets
            .filter(sheet => sheet.href === null) // 只处理内联样式
            .map(sheet => {
              try {
                return Array.from(sheet.cssRules)
                  .map(rule => rule.cssText)
                  .join('\n');
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              } catch (e) {
                return '';
              }
            })
            .join('\n');
            
          // 将所有内联样式添加到克隆文档
          if (inlineStyles) {
            const style = document.createElement('style');
            style.textContent = inlineStyles;
            clonedNode.querySelector('head')?.appendChild(style);
          }
          
          // 为了保证看到和用户屏幕上一样的内容，强制设置可见性
          const allElements = clonedNode.querySelectorAll('*');
          allElements.forEach(el => {
            const element = el as HTMLElement;
            element.style.visibility = 'visible';
            element.style.opacity = '1';
          });
        }
      });
      
      // 恢复原始滚动位置
      window.scrollTo(originalScroll.scrollX, originalScroll.scrollY);
      
      // 将canvas转换为高质量图片URL
      const imgData = canvas.toDataURL('image/png', 1.0); // 使用最高质量
      
      // 创建下载链接
      const downloadLink = document.createElement('a');
      downloadLink.href = imgData;
      downloadLink.download = '徐浩然-前端开发工程师.png';
      document.body.appendChild(downloadLink);
      
      // 触发下载
      downloadLink.click();
      
      // 清理
      document.body.removeChild(downloadLink);
    } catch (error) {
      console.error('导出图片时出错：', error);
    } finally {
      // 移除加载提示
      document.body.removeChild(loadingToast);
      
      // 添加冷却时间，防止频繁点击
      setTimeout(() => {
        setIsProcessing(false);
      }, 2000);
    }
  }, [isProcessing]);
  
  const handleMouseDown = (e: React.MouseEvent) => {
    // 记录拖拽开始时间
    dragStartTimeRef.current = Date.now();
    dragDistanceRef.current = 0;
    
    setIsDragging(true);
    setStartPos({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    // 记录拖拽开始时间
    dragStartTimeRef.current = Date.now();
    dragDistanceRef.current = 0;
    
    setIsDragging(true);
    const touch = e.touches[0];
    setStartPos({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    
    const newX = e.clientX - startPos.x;
    const newY = e.clientY - startPos.y;
    
    // 计算拖拽距离
    const dx = newX - position.x;
    const dy = newY - position.y;
    dragDistanceRef.current = Math.sqrt(dx * dx + dy * dy);
    
    setPosition({ x: newX, y: newY });
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    
    const touch = e.touches[0];
    const newX = touch.clientX - startPos.x;
    const newY = touch.clientY - startPos.y;
    
    // 计算拖拽距离
    const dx = newX - position.x;
    const dy = newY - position.y;
    dragDistanceRef.current = Math.sqrt(dx * dx + dy * dy);
    
    setPosition({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleClick = () => {
// 暂时不调用导出功能
    if (1) {
      // 显示"暂不开放"提示
      const noticeToast = document.createElement('div');
      noticeToast.innerText = '暂不开放导出简历';
      noticeToast.style.position = 'fixed';
      noticeToast.style.top = '20px';
      noticeToast.style.left = '50%';
      noticeToast.style.transform = 'translateX(-50%)';
      noticeToast.style.padding = '10px 20px';
      noticeToast.style.background = 'rgba(0,0,0,0.7)';
      noticeToast.style.color = 'white';
      noticeToast.style.borderRadius = '4px';
      noticeToast.style.zIndex = '9999';
      document.body.appendChild(noticeToast);

      // 2秒后自动移除提示
      setTimeout(() => {
        document.body.removeChild(noticeToast);
      }, 2000);

      return; 
    }
    
    exportImage();
  };

  // 添加和移除全局事件监听器
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      className="fixed w-16 h-16 rounded-full bg-gradient-to-r from-purple-300 to-indigo-300 text-white shadow-lg flex items-center justify-center cursor-pointer z-50 hover:shadow-xl transition-shadow floating-pdf-button"
      style={{ 
        touchAction: 'none',
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: isProcessing ? 0.7 : 1,
        pointerEvents: isProcessing ? 'none' : 'auto'
      }}
      disabled={isProcessing}
    >
      {isProcessing ? (
        <svg className="animate-spin h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )}
    </button>
  );
} 