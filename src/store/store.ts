import { configureStore } from '@reduxjs/toolkit';
import canvasReducer from './slices/canvasSlice';
import toolsReducer from './slices/toolsSlice';
import historyReducer from './slices/historySlice';
import themeReducer from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    canvas: canvasReducer,
    tools: toolsReducer,
    history: historyReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;