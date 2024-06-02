const vehicleTypeMap = {
  panelTruck: 'Van',
  alcove: 'Alcove',
  fullyIntegrated: 'FullyIntegrated',
};

const VehicleTypeFilter = ({ vehicleType, handleVehicleTypeChange }) => {
  return (
    <div>
      <h3>Vehicle type</h3>
      {Object.keys(vehicleTypeMap).map(type => (
        <label key={type}>
          <input
            type="radio"
            value={type}
            checked={vehicleType === type}
            onChange={() => handleVehicleTypeChange(type)}
          />
          {vehicleTypeMap[type]}
        </label>
      ))}
    </div>
  );
};

export default VehicleTypeFilter;
