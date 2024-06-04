import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 16px 40px;
  line-height: 1.5;
  color: ${props => props.color || 'var(--white)'};
  font-family: var(--font-medium);
  font-size: 16px;
  border-radius: 50px;
  transition: background-color 0.3s;
  width: ${props => props.width || 'auto'};
  background-color: ${props => props.$background || 'var(--red)'};
  border: ${props => (props.$border ? `3px solid ${props.$border}` : 'none')};

  &:hover {
    background-color: ${props => props.$hover || 'var(--red-accent)'};
  }
`;
