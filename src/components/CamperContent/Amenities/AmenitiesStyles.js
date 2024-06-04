import styled from 'styled-components';

export const AmenitiesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const AmenityItem = styled.li`
  display: flex;
  gap: 8px;
  border-radius: 50px;
  padding: 12px 18px;
  align-items: center;
  font-family: var(--font-medium);
  background-color: var(--light-gray-accent);
`;
