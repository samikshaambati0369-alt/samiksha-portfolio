import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { playSound } from '../../utils/sound';
import { Minus, Square, X, Maximize2, Minimize2 } from 'lucide-react';

export default function Window({
  id,
  title,
  icon: Icon,
  isOpen,
  isMinimized,
  zIndex,
  onClose,
  onMinimize,
  onFocus,
  initialPosition = { x: 100, y: 50 },
  initialSize = { width: 760, height: 520 },
  children,
}) {
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState(initialSize);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef({ startX: 0, startY: 0, posX: 0, posY: 0 });
  const windowRef = useRef(null);

  // Position adjustments for smaller screens
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      if (screenWidth < 768) {
        setIsMaximized(true);
      } else {
        // Keep within bounds
        setPosition(prev => ({
          x: Math.min(prev.x, Math.max(10, screenWidth - 780)),
          y: Math.min(prev.y, Math.max(50, screenHeight - 560)),
        }));
      }
    }
  }, []);

  const handleMouseDown = (e) => {
    if (isMaximized) return;
    setIsDragging(true);
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      posX: position.x,
      posY: position.y,
    };
    onFocus();

    const handleMouseMove = (moveEvent) => {
      const deltaX = moveEvent.clientX - dragRef.current.startX;
      const deltaY = moveEvent.clientY - dragRef.current.startY;
      setPosition({
        x: Math.max(0, dragRef.current.posX + deltaX),
        y: Math.max(40, dragRef.current.posY + deltaY),
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const toggleMaximize = () => {
    playSound('click');
    setIsMaximized(!isMaximized);
  };

  if (!isOpen || isMinimized) return null;

  return (
    <motion.div
      ref={windowRef}
      onMouseDown={onFocus}
      initial={{ scale: 0.94, opacity: 0, y: 15 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.92, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      style={{
        zIndex,
        ...(isMaximized
          ? { top: '40px', left: 0, right: 0, bottom: '64px', width: '100%', height: 'calc(100vh - 104px)' }
          : { top: `${position.y}px`, left: `${position.x}px`, width: `${size.width}px`, height: `${size.height}px` }),
      }}
      className={`fixed rounded-2xl flex flex-col overflow-hidden shadow-2xl border transition-[border-color,box-shadow] duration-200 ${
        isMaximized ? 'rounded-none border-x-0' : 'border-slate-700/80 shadow-2xl shadow-indigo-950/40'
      } bg-slate-900/95 backdrop-blur-xl`}
    >
      {/* Title Bar / Header */}
      <div
        onMouseDown={handleMouseDown}
        onDoubleClick={toggleMaximize}
        className="h-10 bg-slate-950/90 border-b border-slate-800/80 px-4 flex items-center justify-between cursor-move select-none shrink-0"
      >
        {/* Traffic Light Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              playSound('close');
              onClose();
            }}
            className="w-3 h-3 rounded-full bg-rose-500 hover:bg-rose-600 transition-colors flex items-center justify-center group"
            title="Close"
          >
            <X className="w-2 h-2 text-rose-950 opacity-0 group-hover:opacity-100" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              playSound('click');
              onMinimize();
            }}
            className="w-3 h-3 rounded-full bg-amber-500 hover:bg-amber-600 transition-colors flex items-center justify-center group"
            title="Minimize"
          >
            <Minus className="w-2 h-2 text-amber-950 opacity-0 group-hover:opacity-100" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleMaximize();
            }}
            className="w-3 h-3 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors flex items-center justify-center group"
            title={isMaximized ? 'Restore' : 'Maximize'}
          >
            {isMaximized ? (
              <Minimize2 className="w-2 h-2 text-emerald-950 opacity-0 group-hover:opacity-100" />
            ) : (
              <Maximize2 className="w-2 h-2 text-emerald-950 opacity-0 group-hover:opacity-100" />
            )}
          </button>
        </div>

        {/* Center Title */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
          {Icon && <Icon className="w-3.5 h-3.5 text-indigo-400" />}
          <span>{title}</span>
        </div>

        {/* Empty placeholder for balance */}
        <div className="w-12" />
      </div>

      {/* Window Body */}
      <div className="flex-1 overflow-hidden relative">
        {children}
      </div>
    </motion.div>
  );
}
