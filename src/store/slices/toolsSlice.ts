import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Tool = 'brush' | 'eraser' | 'fill' | 'line' | 'rectangle' | 'circle';

interface ToolsState {
  currentTool: Tool;
  currentColor: string;
  palette: string[];
  customPalettes: Record<string, string[]>;
}

const initialState: ToolsState = {
  currentTool: 'brush',
  currentColor: '#000000',
  palette: [
    '#000000', '#FFFFFF', '#7C7C7C', '#FF0000',
    '#00FF00', '#0000FF', '#FFFF00', '#00FFFF',
    '#FF00FF', '#FF8800', '#884400', '#00FF88',
  ],
  customPalettes: {
    'NES': [
      '#7C7C7C', '#0000FC', '#0000BC', '#4428BC',
      '#940084', '#A80020', '#A81000', '#881400',
      '#503000', '#007800', '#006800', '#005800',
      '#004058', '#000000', '#000000', '#000000',
    ],
    'Game Boy': [
      '#0F380F', '#306230', '#8BAC0F', '#9BBC0F'
    ],
  },
};

export const toolsSlice = createSlice({
  name: 'tools',
  initialState,
  reducers: {
    setTool: (state, action: PayloadAction<Tool>) => {
      state.currentTool = action.payload;
    },
    setColor: (state, action: PayloadAction<string>) => {
      state.currentColor = action.payload;
    },
    addToPalette: (state, action: PayloadAction<string>) => {
      if (!state.palette.includes(action.payload)) {
        state.palette.push(action.payload);
      }
    },
    savePalette: (state, action: PayloadAction<{ name: string; colors: string[] }>) => {
      state.customPalettes[action.payload.name] = action.payload.colors;
    },
  },
});

export const { setTool, setColor, addToPalette, savePalette } = toolsSlice.actions;
export default toolsSlice.reducer;