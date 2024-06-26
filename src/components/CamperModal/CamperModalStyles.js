import styled, { css } from 'styled-components';

export const ModalWrapper = styled.div.attrs(props => ({
  modalOpen: props.modalOpen,
}))`
  display: ${props => (props.$modalOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  overflow: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  position: relative;
  padding: 40px 16px 40px 40px;
  max-width: 982px;
  background-color: var(--white);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  overflow-y: auto;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 34px;
  right: 40px;
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
    props.$isActive &&
    css`
      &::after {
        content: '';
        position: absolute;
        bottom: -24px;
        left: 0;
        width: 100%;
        height: 6px;
        z-index: 1;
        background-color: var(--red);
      }
    `}
`;

export const PopupContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const DecorLine = styled.div`
  height: 2px;
  background-color: var(--light-gray-accent);
  width: 100%;
`;

export const CamperDetail = styled.p`
  font-size: 16px;
  letter-spacing: 0.03em;
  line-height: 1.5em;
`;

export const ScrollContainer = styled.div`
  margin: 24px 0 44px 0;
  max-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 20px;
`;

export const ButtonContainer = styled.div`
  margin-bottom: 20.6px;
  display: flex;
  gap: 40px;
`;

export const PopupContent = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 44px;
  border-radius: 10px;
  display: ${({ $active }) => ($active ? 'block' : 'none')};
  width: 100%;
`;

export const PopupContentBox = styled.div`
  display: flex;
  width: 900px;
`;

export const RatingModalBox = styled.div`
  display: flex;
  gap: 16px;
  margin: 8px 0 16px 0;
  font-family: var(--font-semibold);
`;

export const CamperModalRating = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 24px;
    width: 82%;
    height: 2px;
    background-color: currentColor;
  }
`;
