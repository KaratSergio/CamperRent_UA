import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilterType } from '../../redux/filter/slice';

import CustomButton from '../CustomButton/CustomButton';
import LocationFilter from './LocationFilter/LocationFilter';
import EquipmentFilter from './EquipmentFilter/EquipmentFilter';
import VehicleTypeFilter from './VehicleTypeFilter/VehicleTypeFilter';

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
    <div>
      <p>Filters</p>
      <LocationFilter onChange={handleLocationChange} />
      <EquipmentFilter
        equipmentFilters={equipmentFilters}
        handleEquipmentChange={handleEquipmentChange}
      />
      <VehicleTypeFilter
        vehicleType={vehicleType}
        handleVehicleTypeChange={handleVehicleTypeChange}
      />
      <CustomButton onClick={handleSearch}>Search</CustomButton>
    </div>
  );
};

export default CamperFilter;
