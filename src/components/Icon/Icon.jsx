import { SvgIcon } from './IconStyles';
import sprite from '../../assets/icons/icons.svg';

const Icon = ({ id, size = 20, color, strokeColor }) => (
  <SvgIcon width={size} height={size} fill={color} stroke={strokeColor}>
    <use href={`${sprite}#${id}`} />
  </SvgIcon>
);

export default Icon;
