import { StyledButton } from './ButtonStyles';

const Button = ({ onClick, type, children, width, background, border, color, hover }) => {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      width={width}
      $background={background}
      $border={border}
      color={color}
      $hover={hover}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
