import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const Preview: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { width, height, pixels } = useSelector((state: RootState) => state.canvas);
  const isDark = useSelector((state: RootState) => state.theme.isDark);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const scale = Math.min(canvas.width / width, canvas.height / height);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.imageSmoothingEnabled = false;

    pixels.forEach((row, y) => {
      row.forEach((color, x) => {
        if (color !== 'transparent') {
          ctx.fillStyle = color;
          ctx.fillRect(x * scale, y * scale, scale, scale);
        }
      });
    });
  }, [width, height, pixels]);

  return (
    <div className="h-32 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4 flex items-center justify-center">
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={128}
          height={128}
          className={`border ${
            isDark ? 'border-gray-700' : 'border-gray-300'
          } shadow-sm`}
        />
        <span className="absolute -top-6 left-0 text-sm text-gray-600 dark:text-gray-400">
          Preview
        </span>
      </div>
    </div>
  );
};