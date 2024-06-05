import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
`;

export const ModalContent = styled.div`
  padding: 20px;
  border-radius: 10px;
  position: relative;
`;

export const CloseButton = styled.button`
  display: none; /* on \ off close btn  */
  position: absolute;
  top: 30px;
  right: 30px;
  padding: 0px 6px 2px 6px;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.39);
  background-color: rgba(0, 0, 0, 0.39);
  border-radius: 50px;
`;

export const ModalImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 20px;
`;

export const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translateY(-50%);
  background: none;
  border: none;

  padding: 0px 8px 2px 8px;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.39);
  background-color: rgba(0, 0, 0, 0.39);
  border-radius: 50px;
`;

export const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  background: none;
  border: none;

  font-size: 24px;
  padding: 0px 8px 2px 8px;
  color: rgba(0, 0, 0, 0.39);
  background-color: rgba(0, 0, 0, 0.39);
  border-radius: 50px;
`;
