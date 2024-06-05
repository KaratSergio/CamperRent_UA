import { createSlice } from '@reduxjs/toolkit';
import { fetchCampersAsync } from './actions';

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchCampersAsync.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCampersAsync.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCampersAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      }),
});

export default campersSlice.reducer;
