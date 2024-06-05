import styled from 'styled-components';

export const VehicleButton = styled.input`
  display: none;

  &:checked + div {
    border-color: var(--red);
  }
`;

export const LabelWrapper = styled.label`
  display: flex;
  align-items: center;
`;

export const VehicleTitle = styled.h2`
  margin-bottom: 24px;
  letter-spacing: 0.02em;
`;

export const IconWrapper = styled.div`
  width: 112px;
  height: 95px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    border: 2px solid var(--red);
  }

  cursor: pointer;
  border-radius: 10px;
  border: 2px solid var(--light-gray-accent);
  transition:
    background-color 0.3s,
    border-color 0.3s;

  span {
    font-family: var(--font-medium);
    font-size: 16px;
    margin-top: 9px;
    text-align: center;
  }
`;

export const RadioWrapper = styled.div`
  display: flex;
  margin: 24px 0 64px 0;
  gap: 10px;
`;
