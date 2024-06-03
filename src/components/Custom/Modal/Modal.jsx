import { useEffect, useState } from 'react';

import {
  ModalWrapper,
  ModalContent,
  CloseButton,
  ModalImage,
  PrevButton,
  NextButton,
} from './ModalStyles';

const Modal = ({ isOpen, onClose, image, handlePrev, handleNext }) => {
  const [isEscapePressed, setIsEscapePressed] = useState(false);

  useEffect(() => {
    const handleEscape = event => {
      if (event.keyCode === 27) {
        setIsEscapePressed(true);
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    if (isEscapePressed) {
      onClose();
    }
  }, [isEscapePressed, onClose]);

  const handleClose = () => {
    onClose();
  };

  const handleModalClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <ModalWrapper onClick={handleModalClick}>
          <ModalContent>
            <CloseButton onClick={handleClose}>&times;</CloseButton>
            <PrevButton onClick={handlePrev}>{'<'}</PrevButton>
            <NextButton onClick={handleNext}>{'>'}</NextButton>
            <ModalImage src={image} alt="Modal Image" />
          </ModalContent>
        </ModalWrapper>
      )}
    </>
  );
};

export default Modal;
