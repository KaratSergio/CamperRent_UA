import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--text-gray-a);

  & span {
    color: var(--dark-blue);
  }
`;

export const StyledInput = styled.input`
  padding-left: 38px;
  margin: 8px 0 32px 0;
  width: 360px;
  height: 56px;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  background-color: var(--light-gray);
  box-sizing: border-box;
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: 8px;
  top: 34px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
`;
