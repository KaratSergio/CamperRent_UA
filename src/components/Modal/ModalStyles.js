import styled from 'styled-components';

export const ModalWrapper = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const PopupButton = styled.button`
  margin-right: 10px;
`;

export const PopupContent = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
`;
