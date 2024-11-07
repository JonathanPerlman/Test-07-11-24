//FILL HERE 3.2
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import roles from "../data/roles.json"

interface RoleState {
  role: string; 
}

const initialState: RoleState = {
  role: roles[0], 
};

const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<string>) => {
      const newRole = action.payload;
      if (roles.includes(newRole)) {
        state.role = newRole;
      }
    },
  },
});

export const { setRole } = roleSlice.actions;

export default roleSlice.reducer;