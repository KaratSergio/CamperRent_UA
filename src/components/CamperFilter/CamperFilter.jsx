import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilterType } from '../../redux/filter/slice';

import Button from '../Custom/Button/Button';
import LocationFilter from './LocationFilter/LocationFilter';
import EquipmentFilter from './EquipmentFilter/EquipmentFilter';
import VehicleTypeFilter from './VehicleTypeFilter/VehicleTypeFilter';

import { CamperFilterWrapper, FilterTitle } from './CamperFilterStyles';

const CamperFilter = () => {
  const dispatch = useDispatch();
  const [equipmentFilters, setEquipmentFilters] = useState([]);
  const [vehicleType, setVehicleType] = useState(null);
  const [location, setLocation] = useState('');

  const handleEquipmentChange = type => {
    setEquipmentFilters(prevFilters =>
      prevFilters.includes(type) ? prevFilters.filter(t => t !== type) : [...prevFilters, type]
    );
  };

  const handleVehicleTypeChange = type => {
    setVehicleType(type);
  };

  const handleSearch = () => {
    dispatch(setFilterType({ equipment: equipmentFilters, vehicleType, location }));
  };

  const handleLocationChange = newLocation => {
    setLocation(newLocation);
  };

  return (
    <CamperFilterWrapper>
      <LocationFilter onChange={handleLocationChange} />
      <FilterTitle>Filters</FilterTitle>
      <EquipmentFilter
        equipmentFilters={equipmentFilters}
        handleEquipmentChange={handleEquipmentChange}
      />
      <VehicleTypeFilter
        vehicleType={vehicleType}
        handleVehicleTypeChange={handleVehicleTypeChange}
      />
      <Button width="173px" onClick={handleSearch}>
        Search
      </Button>
    </CamperFilterWrapper>
  );
};

export default CamperFilter;
