import { StyledButton } from './CustomButtonStyles';

const CustomButton = ({
  onClick,
  type,
  children,
  width,
  backgroundColor,
  borderColor,
  textColor,
  hoverBackgroundColor,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      width={width}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      textColor={textColor}
      hoverBackgroundColor={hoverBackgroundColor}
    >
      {children}
    </StyledButton>
  );
};

export default CustomButton;
