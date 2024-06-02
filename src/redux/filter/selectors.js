import { createSelector } from '@reduxjs/toolkit';

const selectCampersState = state => state.campers.data || [];
const selectFilter = state => state.filter;

export const selectFilteredCampers = createSelector(
  [selectCampersState, selectFilter],
  (campers, filter) => {
    if (!campers.length) return [];

    const { vehicleType, equipment, location } = filter;

    return campers.filter(camper => {
      const matchesVehicleType = vehicleType ? camper.form === vehicleType : true;
      const matchesEquipment = equipment.length
        ? equipment.every(equip => camper.details[equip] || camper[equip])
        : true;
      const matchesLocation = location ? camper.location.includes(location) : true;

      return matchesVehicleType && matchesEquipment && matchesLocation;
    });
  }
);
