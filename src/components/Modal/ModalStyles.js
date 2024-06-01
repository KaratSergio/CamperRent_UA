import styled, { css } from 'styled-components';

export const ModalWrapper = styled.div.attrs(props => ({
  modalOpen: props.modalOpen,
}))`
  display: ${props => (props.modalOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  position: relative;
  padding: 40px 40px 40px 40px;
  max-width: 982px;
  background-color: var(--white);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 32px;
  background: none;
  border: none;
`;

export const PopupButton = styled.button`
  position: relative;
  font-size: 20px;
  font-family: var(--font-semibold);
  background: none;
  border: none;
  padding: 0;

  ${props =>
    props.isActive &&
    css`
      &::after {
        content: '';
        position: absolute;
        bottom: -24px;
        left: 0;
        width: 100%;
        height: 6px;
        background-color: var(--red);
      }
    `}
`;

export const PopupContainer = styled.div`
  display: flex;
  gap: 40px;
`;
export const DecorLine = styled.div`
  height: 2px;
  background-color: var(--text-gray);
`;

export const PopupContent = styled.div`
  display: ${props => (props.modalOpen ? 'block' : 'none')};
  background-color: #f1f1f1;
  padding: 10px;
  margin: 10px 0;
`;

export const CamperDetail = styled.p`
  font-size: 16px;
  letter-spacing: 0.03em;
  line-height: 1.5em;
`;

export const ScrollContainer = styled.div`
  margin-bottom: 44px;
  max-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: 2px;

  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    background-color: #ffffff;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 20px;
  }
`;
