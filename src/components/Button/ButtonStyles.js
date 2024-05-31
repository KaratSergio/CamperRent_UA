import styled from 'styled-components';

export const StyledButton = styled.button`
  font-weight: 500;
  padding: 16px 60px;
  line-height: 1.5;
  color: var(--white);
  background-color: var(--red);
  border: none;
  border-radius: 200px;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--red-accent);
  }
`;
