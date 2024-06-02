import { useState, useEffect } from 'react';
import Images from '../CamperContent/Images/Images';
import CustomForm from '../CustomForm/CustomForm';

import { CamperName, CamperRating } from '../CamperCard/CamperCardStyles';
import {
  ModalWrapper,
  ModalContent,
  CloseButton,
  PopupButton,
  PopupContent,
  PopupContainer,
  CamperDetail,
  ScrollContainer,
  DecorLine,
  ButtonContainer,
} from './CamperModalStyles';

const Modal = ({ modalOpen, toggleModal, images, name, rating, price, description }) => {
  const [activePopup, setActivePopup] = useState('');

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modalOpen]);

  const openPopup = popup => {
    setActivePopup(activePopup === popup ? '' : popup);
  };

  return (
    <>
      <ModalWrapper modalOpen={modalOpen}>
        <ModalContent>
          <CloseButton onClick={toggleModal}>&times;</CloseButton>
          <CamperName>{name}</CamperName>
          <CamperRating>{rating}(reviews)</CamperRating>
          <CamperName>Price: €{price}</CamperName>
          <ScrollContainer>
            <Images images={images} />
            <CamperDetail>Description: {description}</CamperDetail>
          </ScrollContainer>
          <PopupContainer>
            <ButtonContainer>
              <PopupButton
                isActive={activePopup === 'features'}
                onClick={() => openPopup('features')}
              >
                Features
              </PopupButton>
              <PopupButton isActive={activePopup === 'reviews'} onClick={() => openPopup('reviews')}>
                Reviews
              </PopupButton>
            </ButtonContainer>
            <DecorLine />
            {activePopup && (
              <PopupContent active={activePopup}>
                {activePopup === 'features' && (
                  <div>
                    <CustomForm />
                  </div>
                )}
                {activePopup === 'reviews' && (
                  <div>
                    <CustomForm />
                  </div>
                )}
              </PopupContent>
            )}
          </PopupContainer>
        </ModalContent>
      </ModalWrapper>
    </>
  );
};

export default Modal;
