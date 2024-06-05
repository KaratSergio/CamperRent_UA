import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCampersData } from '../../api/data';

export const fetchCampersAsync = createAsyncThunk(
  'data/fetchCampers',
  async (_, { rejectWithValue }) => {
    try {
      return await fetchCampersData();
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
