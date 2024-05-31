import { StyledButton } from './ButtonStyles';

const Button = ({ onClick, type, children }) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;
