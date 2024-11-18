import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setPixel } from '../store/slices/canvasSlice';
import { pushState } from '../store/slices/historySlice';

export const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dispatch = useDispatch();
  const { width, height, pixels, zoom, showGrid } = useSelector((state: RootState) => state.canvas);
  const { currentTool, currentColor } = useSelector((state: RootState) => state.tools);
  const isDark = useSelector((state: RootState) => state.theme.isDark);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw pixels
    pixels.forEach((row, y) => {
      row.forEach((color, x) => {
        ctx.fillStyle = color === 'transparent' ? 
          (isDark ? '#2A2A2A' : '#FFFFFF') : color;
        ctx.fillRect(x * zoom, y * zoom, zoom, zoom);
      });
    });

    // Draw grid
    if (showGrid) {
      ctx.strokeStyle = isDark ? '#444444' : '#DDDDDD';
      ctx.lineWidth = 1;
      
      for (let x = 0; x <= width; x++) {
        ctx.beginPath();
        ctx.moveTo(x * zoom, 0);
        ctx.lineTo(x * zoom, height * zoom);
        ctx.stroke();
      }

      for (let y = 0; y <= height; y++) {
        ctx.beginPath();
        ctx.moveTo(0, y * zoom);
        ctx.lineTo(width * zoom, y * zoom);
        ctx.stroke();
      }
    }
  }, [width, height, pixels, zoom, showGrid, isDark]);

  const handleDraw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / zoom);
    const y = Math.floor((e.clientY - rect.top) / zoom);

    if (x >= 0 && x < width && y >= 0 && y < height) {
      const color = currentTool === 'eraser' ? 'transparent' : currentColor;
      dispatch(setPixel({ x, y, color }));
      dispatch(pushState(pixels));
    }
  };

  return (
    <div className="relative flex-1 flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        width={width * zoom}
        height={height * zoom}
        className="border border-gray-300 dark:border-gray-700 shadow-lg"
        onMouseDown={handleDraw}
        onMouseMove={(e) => e.buttons === 1 && handleDraw(e)}
      />
    </div>
  );
};