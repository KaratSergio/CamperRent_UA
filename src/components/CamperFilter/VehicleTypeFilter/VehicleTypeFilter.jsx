import Icon from '../../Icon/Icon';
import { DecorLine } from '../../CamperModal/CamperModalStyles';

import {
  VehicleButton,
  LabelWrapper,
  RadioWrapper,
  IconWrapper,
  VehicleTitle,
} from './VehicleTypeFilterStyles';

const vehicleTypeMap = {
  panelTruck: 'Van',
  alcove: 'Alcove',
  fullyIntegrated: 'Fully Integrated',
};

const VehicleTypeFilter = ({ vehicleType, handleVehicleTypeChange }) => {
  return (
    <>
      <VehicleTitle>Vehicle type</VehicleTitle>
      <DecorLine />
      <RadioWrapper>
        {Object.keys(vehicleTypeMap).map(type => {
          const iconId = `icon-${type}`;

          return (
            <LabelWrapper key={type}>
              <VehicleButton
                type="radio"
                value={type}
                checked={vehicleType === type}
                onChange={() => handleVehicleTypeChange(type)}
              />
              <IconWrapper>
                <Icon
                  id={iconId}
                  width={40}
                  height={28}
                  color={'var(--dark-blue)'}
                  strokeColor={'transparent'}
                />
                <span>{vehicleTypeMap[type]}</span>
              </IconWrapper>
            </LabelWrapper>
          );
        })}
      </RadioWrapper>
    </>
  );
};

export default VehicleTypeFilter;
