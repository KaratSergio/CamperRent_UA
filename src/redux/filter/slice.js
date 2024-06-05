import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    equipment: [],
    vehicleType: null,
    location: '',
  },
  reducers: {
    setFilterType: (state, action) => {
      const { equipment, vehicleType, location } = action.payload;
      state.equipment = equipment || [];
      state.vehicleType = vehicleType || null;
      state.location = location || '';
    },
  },
});

export const { setFilterType } = filterSlice.actions;

export default filterSlice.reducer;
