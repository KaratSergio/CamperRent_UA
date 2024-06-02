const equipmentMap = {
  TV: 'TV',
  kitchen: 'Kitchen',
  shower: 'Shower/WC',
  transmission: 'Automatic',
  airConditioner: 'AC',
};

const EquipmentFilter = ({ equipmentFilters, handleEquipmentChange }) => {
  return (
    <div>
      <h3>Vehicle equipment</h3>
      {Object.keys(equipmentMap).map(equip => (
        <label key={equip}>
          <input
            type="checkbox"
            value={equip}
            checked={equipmentFilters.includes(equip)}
            onChange={() => handleEquipmentChange(equip)}
          />
          {equipmentMap[equip]}
        </label>
      ))}
    </div>
  );
};

export default EquipmentFilter;
