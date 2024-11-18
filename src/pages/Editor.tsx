import React from 'react';
import { Canvas } from '../components/Canvas';
import { ToolPanel } from '../components/ToolPanel';
import { ColorPanel } from '../components/ColorPanel';
import { Controls } from '../components/Controls';
import { Preview } from '../components/Preview';

export const Editor: React.FC = () => {
  return (
    <div className="h-screen flex flex-col dark:bg-gray-900 dark:text-gray-100">
      <Controls />
      <div className="flex-1 flex overflow-hidden">
        <ToolPanel />
        <Canvas />
        <ColorPanel />
      </div>
      <Preview />
    </div>
  );
};