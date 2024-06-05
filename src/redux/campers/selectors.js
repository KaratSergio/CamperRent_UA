import { createSelector } from '@reduxjs/toolkit';

const selectCampersSlice = state => state.campers;

export const selectCampers = createSelector(
  selectCampersSlice,
  campersSlice => campersSlice.data
);

export const selectIsCampersLoading = createSelector(
  selectCampersSlice,
  campersSlice => campersSlice.isLoading
);

export const selectCampersError = createSelector(
  selectCampersSlice,
  campersSlice => campersSlice.error
);
