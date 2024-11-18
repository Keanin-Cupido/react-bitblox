import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setTool, Tool } from '../store/slices/toolsSlice';

const tools: { id: Tool; icon: React.ReactNode; label: string }[] = [
  { id: 'brush', icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brush"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21v-4a4 4 0 1 1 4 4h-4" /><path d="M21 3a16 16 0 0 0 -12.8 10.2" /><path d="M21 3a16 16 0 0 1 -10.2 12.8" /><path d="M10.6 9a9 9 0 0 1 4.4 4.4" /></svg>, label: 'Brush (B)' },
  { id: 'eraser', icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-eraser"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9.2 9.3" /><path d="M18 13.3l-6.3 -6.3" /></svg>, label: 'Eraser (E)' },
  { id: 'fill', icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-bucket-droplet"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 16l1.465 1.638a2 2 0 1 1 -3.015 .099l1.55 -1.737z" /><path d="M13.737 9.737c2.299 -2.3 3.23 -5.095 2.081 -6.245c-1.15 -1.15 -3.945 -.217 -6.244 2.082c-2.3 2.299 -3.231 5.095 -2.082 6.244c1.15 1.15 3.946 .218 6.245 -2.081z" /><path d="M7.492 11.818c.362 .362 .768 .676 1.208 .934l6.895 4.047c1.078 .557 2.255 -.075 3.692 -1.512c1.437 -1.437 2.07 -2.614 1.512 -3.692c-.372 -.718 -1.72 -3.017 -4.047 -6.895a6.015 6.015 0 0 0 -.934 -1.208" /></svg>, label: 'Fill (F)' },
  { id: 'line', icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-minus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /></svg>, label: 'Line (L)' },
  { id: 'rectangle', icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-square"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /></svg>, label: 'Rectangle (R)' },
  { id: 'circle', icon: <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg>, label: 'Circle (C)' },
];

export const ToolPanel: React.FC = () => {
  const dispatch = useDispatch();
  const currentTool = useSelector((state: RootState) => state.tools.currentTool);
  const isDark = useSelector((state: RootState) => state.theme.isDark);

  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const tool = tools.find(t => t.label.includes(`(${e.key.toUpperCase()})`));
      if (tool) {
        dispatch(setTool(tool.id));
      }
    };

    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [dispatch]);

  return (
    <div className="w-16 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-2 flex flex-col gap-2">
      {tools.map((tool) => (
        <button
          key={tool.id}
          onClick={() => dispatch(setTool(tool.id))}
          className={`p-2 flex items-center justify-center rounded-lg transition-colors ${
            currentTool === tool.id
              ? 'bg-blue-500 text-white'
              : 'hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
          title={tool.label}
        >
          {tool.icon}
        </button>
      ))}
    </div>
  );
};