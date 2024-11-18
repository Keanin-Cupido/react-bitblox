import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setColor, addToPalette } from '../store/slices/toolsSlice';

export const ColorPanel: React.FC = () => {
  const dispatch = useDispatch();
  const { currentColor, palette, customPalettes } = useSelector((state: RootState) => state.tools);
  const [selectedPalette, setSelectedPalette] = React.useState('default');

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value;
    dispatch(setColor(color));
  };

  const handleAddToPalette = () => {
    dispatch(addToPalette(currentColor));
  };

  return (
    <div className="w-64 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 p-4">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2 dark:text-gray-200">
          Color Picker
        </label>
        <div className="flex gap-2">
          <input
            type="color"
            value={currentColor}
            onChange={handleColorChange}
            className="w-10 h-10 rounded cursor-pointer"
          />
          <button
            onClick={handleAddToPalette}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
          >
            Add to Palette
          </button>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2 dark:text-gray-200">
          Palette
        </label>
        <select
          value={selectedPalette}
          onChange={(e) => setSelectedPalette(e.target.value)}
          className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 mb-2"
        >
          <option value="default">Custom Palette</option>
          {Object.keys(customPalettes).map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>

        <div className="grid grid-cols-6 gap-1">
          {(selectedPalette === 'default' ? palette : customPalettes[selectedPalette]).map((color, index) => (
            <button
              key={index}
              onClick={() => dispatch(setColor(color))}
              className={`w-8 h-8 rounded ${
                color === currentColor ? 'ring-2 ring-blue-500' : ''
              }`}
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};