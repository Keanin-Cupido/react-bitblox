import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HistoryState {
  past: string[][][];
  future: string[][][];
  present: string[][];
}

const initialState: HistoryState = {
  past: [],
  future: [],
  present: Array(16).fill(Array(16).fill('transparent')),
};

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    undo: (state) => {
      if (state.past.length > 0) {
        const newPast = [...state.past];
        const newPresent = newPast.pop()!;
        state.future = [state.present, ...state.future];
        state.past = newPast;
        state.present = newPresent;
      }
    },
    redo: (state) => {
      if (state.future.length > 0) {
        const newFuture = [...state.future];
        const newPresent = newFuture.shift()!;
        state.past = [...state.past, state.present];
        state.future = newFuture;
        state.present = newPresent;
      }
    },
    pushState: (state, action: PayloadAction<string[][]>) => {
      state.past = [...state.past, state.present];
      state.present = action.payload;
      state.future = [];
    },
  },
});

export const { undo, redo, pushState } = historySlice.actions;
export default historySlice.reducer;