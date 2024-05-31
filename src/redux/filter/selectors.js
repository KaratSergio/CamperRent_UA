import { createSelector } from 'reselect';

const filterSelector = state => state.filter;
const campersSelector = state => state.campers;

export const filteredCampersSelector = createSelector(
  [campersSelector, filterSelector],
  (campers, filter) => {
    if (!filter) {
      return campers;
    }

    return campers.filter(camper => {
      return camper.someProperty === filter;
    });
  }
);
