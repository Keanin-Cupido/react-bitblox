import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setDimensions, setZoom, toggleGrid } from '../store/slices/canvasSlice';
import { undo, redo } from '../store/slices/historySlice';
import { toggleTheme } from '../store/slices/themeSlice';
import { Link } from 'react-router-dom';

export const Controls: React.FC = () => {
  const dispatch = useDispatch();
  const { width, height, zoom, showGrid, pixels } = useSelector((state: RootState) => state.canvas);
  const isDark = useSelector((state: RootState) => state.theme.isDark);

  const handleExport = () => {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    pixels.forEach((row, y) => {
      row.forEach((color, x) => {
        if (color !== 'transparent') {
          ctx.fillStyle = color;
          ctx.fillRect(x, y, 1, 1);
        }
      });
    });

    const link = document.createElement('a');
    link.download = 'pixel-art.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        if (e.key === 'z') {
          e.preventDefault();
          if (e.shiftKey) {
            dispatch(redo());
          } else {
            dispatch(undo());
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [dispatch]);

  return (
    <div className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link to={'/'} className="flex items-center mr-4">
          <img src="/logo.svg" alt="BitBlox logo" width={36} height={36} />
          <span className="ml-2 text-lg font-bold text-gray-900 dark:text-white">
            Bitblox
          </span>
        </Link>
        <select
          value={`${width}x${height}`}
          onChange={(e) => {
            const [w, h] = e.target.value.split('x').map(Number);
            dispatch(setDimensions({ width: w, height: h }));
          }}
          className="p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
        >
          <option value="8x8">8x8</option>
          <option value="16x16">16x16</option>
          <option value="32x32">32x32</option>
          <option value="64x64">64x64</option>
        </select>

        <input
          type="range"
          min="10"
          max="40"
          value={zoom}
          onChange={(e) => dispatch(setZoom(Number(e.target.value)))}
          className="w-32"
        />

        <button
          onClick={() => dispatch(toggleGrid())}
          className={`p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 ${
            showGrid ? 'text-blue-500' : ''
          }`}
          title="Toggle Grid (G)"
        >
          <svg xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-layout-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M4 13m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M14 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /><path d="M14 15m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /></svg>
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => dispatch(undo())}
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          title="Undo (Ctrl+Z)"
        >
          <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-back-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 14l-4 -4l4 -4" /><path d="M5 10h11a4 4 0 1 1 0 8h-1" /></svg>
        </button>
        <button
          onClick={() => dispatch(redo())}
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          title="Redo (Ctrl+Shift+Z)"
        >
          <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-forward-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 14l4 -4l-4 -4" /><path d="M19 10h-11a4 4 0 1 0 0 8h1" /></svg>
        </button>
        <button
          onClick={handleExport}
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          title="Export PNG"
        >
          <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-download"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" /></svg>
        </button>
        <button
          onClick={() => dispatch(toggleTheme())}
          className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
          title="Toggle Theme"
        >
          {isDark ? <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-sun"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" /></svg> : <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-moon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" /></svg>}
        </button>
      </div>
    </div>
  );
};