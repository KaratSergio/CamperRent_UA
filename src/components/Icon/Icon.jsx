import { SvgIcon } from './IconStyles';
import sprite from '../../assets/icons/icons.svg';

const Icon = ({ id, width = 20, height = 20, color, strokeColor }) => {
  return (
    <SvgIcon width={width} height={height} fill={color} stroke={strokeColor}>
      <use href={`${sprite}#${id}`} />
    </SvgIcon>
  );
};

export default Icon;
