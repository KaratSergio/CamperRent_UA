import React, { useState } from 'react';

const LocationFilter = ({ onChange }) => {
  const [location, setLocation] = useState('');

  const handleLocationChange = event => {
    const newLocation = event.target.value;
    setLocation(newLocation);
    onChange(newLocation);
  };

  return (
    <>
      <input
        name="location"
        type="text"
        placeholder="Enter location..."
        value={location}
        onChange={handleLocationChange}
      />
    </>
  );
};

export default LocationFilter;
