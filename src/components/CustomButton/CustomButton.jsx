import { StyledButton } from './CustomButtonStyles';

const CustomButton = ({ onClick, type, children, width }) => {
  return (
    <StyledButton onClick={onClick} type={type} width={width}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;
