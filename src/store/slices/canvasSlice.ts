import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CanvasState {
  width: number;
  height: number;
  pixels: string[][];
  zoom: number;
  showGrid: boolean;
}

const initialState: CanvasState = {
  width: 16,
  height: 16,
  pixels: Array(16).fill(Array(16).fill('transparent')),
  zoom: 20,
  showGrid: true,
};

export const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    setDimensions: (state, action: PayloadAction<{ width: number; height: number }>) => {
      const { width, height } = action.payload;
      state.width = width;
      state.height = height;
      state.pixels = Array(height).fill(Array(width).fill('transparent'));
    },
    setPixel: (state, action: PayloadAction<{ x: number; y: number; color: string }>) => {
      const { x, y, color } = action.payload;
      state.pixels[y][x] = color;
    },
    setZoom: (state, action: PayloadAction<number>) => {
      state.zoom = action.payload;
    },
    toggleGrid: (state) => {
      state.showGrid = !state.showGrid;
    },
  },
});

export const { setDimensions, setPixel, setZoom, toggleGrid } = canvasSlice.actions;
export default canvasSlice.reducer;