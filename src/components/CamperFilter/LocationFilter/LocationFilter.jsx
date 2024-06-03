import { useState } from 'react';
import Icon from '../../Icon/Icon';
import { InputWrapper, StyledInput, IconWrapper, StyledLabel } from './LocationFilterStyles';

const LocationFilter = ({ onChange }) => {
  const [location, setLocation] = useState('');

  const handleLocationChange = event => {
    const newLocation = event.target.value;
    setLocation(newLocation);
    onChange(newLocation);
  };

  return (
    <>
      <StyledLabel>
        Location
        <InputWrapper>
          <IconWrapper>
            <Icon id="icon-location" width={20} height={20} />
          </IconWrapper>
          <StyledInput
            name="location"
            type="text"
            placeholder="Enter location..."
            value={location}
            onChange={handleLocationChange}
          />
        </InputWrapper>
      </StyledLabel>
    </>
  );
};

export default LocationFilter;
