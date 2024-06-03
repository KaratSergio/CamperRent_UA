import Icon from '../../Icon/Icon';
import { DecorLine } from '../../CamperModal/CamperModalStyles';

import {
  EquipmentCheckbox,
  LabelWrapper,
  CheckboxWrapper,
  IconWrapper,
  EquipmentTitle,
} from './EquipmentFilterStyles';

const equipmentMap = {
  TV: 'TV',
  kitchen: 'Kitchen',
  shower: 'Shower/WC',
  transmission: 'Automatic',
  airConditioner: 'AC',
};

const EquipmentFilter = ({ equipmentFilters, handleEquipmentChange }) => {
  const iconOrder = ['airConditioner', 'transmission', 'kitchen', 'TV', 'shower'];

  return (
    <>
      <EquipmentTitle>Vehicle equipment</EquipmentTitle>
      <DecorLine />
      <CheckboxWrapper>
        {iconOrder.map(equip => {
          let iconId;
          let iconColor;
          let iconStrokeColor;

          if (equip === 'airConditioner') {
            iconId = 'icon-ac';
            iconColor = 'var(--dark-blue)';
            iconStrokeColor = 'transparent';
          } else if (equip === 'transmission') {
            iconId = 'icon-transmission';
          } else if (equip === 'kitchen') {
            iconId = 'icon-kitchen';
          } else if (equip === 'TV') {
            iconId = 'icon-tv';
          } else if (equip === 'shower') {
            iconId = 'icon-shower';
          }

          return (
            <LabelWrapper key={equip}>
              <EquipmentCheckbox
                type="checkbox"
                value={equip}
                checked={equipmentFilters.includes(equip)}
                onChange={() => handleEquipmentChange(equip)}
              />
              <IconWrapper>
                <Icon
                  id={iconId}
                  width={40}
                  height={28}
                  color={iconColor}
                  strokeColor={iconStrokeColor}
                />
                <span>{equipmentMap[equip]}</span>
              </IconWrapper>
            </LabelWrapper>
          );
        })}
      </CheckboxWrapper>
    </>
  );
};

export default EquipmentFilter;
