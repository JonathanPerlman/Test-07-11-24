import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FloorAccessState {
  floorAccess: boolean[];   
}

const initialState: FloorAccessState = {
  floorAccess: [false, false, false, false, false], 
};

const floorSlice = createSlice({
  name: 'floorAccess',
  initialState,
  reducers: {
    changeAccess: (state, action: PayloadAction<number>) => {
      const floorIndex = action.payload;
      if (floorIndex >= 0 && floorIndex < state.floorAccess.length) {
        state.floorAccess[floorIndex] = !state.floorAccess[floorIndex];
      }
    },
  },
});

export const { changeAccess } = floorSlice.actions;

export default floorSlice.reducer;
