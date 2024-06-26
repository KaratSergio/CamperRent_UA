import styled from 'styled-components';

export const EquipmentCheckbox = styled.input`
  display: none;

  &:checked + div {
    border-color: var(--red);
  }
`;

export const LabelWrapper = styled.label`
  display: flex;
  align-items: center;
`;

export const EquipmentTitle = styled.h2`
  margin-top: 14px;
  margin-bottom: 24px;
  letter-spacing: 0.02em;
`;

export const IconWrapper = styled.div`
  width: 112px;
  height: 95px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  border: 2px solid var(--light-gray-accent);

  cursor: pointer;
  transition:
    background-color 0.3s,
    border-color 0.3s;

  &:hover {
    border: 2px solid var(--red);
  }

  span {
    margin-top: 9px;
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 24px 0 32px 0;
`;
