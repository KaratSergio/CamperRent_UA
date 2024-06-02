import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 16px 40px;
  line-height: 1.5;
  color: var(--white);
  background-color: var(--red);
  font-family: var(--font-medium);
  border: none;
  border-radius: 50px;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--red-accent);
  }
`;
