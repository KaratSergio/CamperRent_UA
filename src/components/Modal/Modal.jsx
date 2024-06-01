import { useState } from 'react';
import Images from '../CamperContent/Images/Images';

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
} from './ModalStyles';

const Modal = ({ modalOpen, toggleModal, images, name, rating, price, description }) => {
  const [activePopup, setActivePopup] = useState('');

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
            <div>
              <PopupButton
                isActive={activePopup === 'features'}
                onClick={() => openPopup('features')}
              >
                Features
              </PopupButton>
              <PopupContent modalOpen={activePopup === 'features'}>
                <p>Features content</p>
              </PopupContent>
            </div>
            <div>
              <PopupButton isActive={activePopup === 'reviews'} onClick={() => openPopup('reviews')}>
                Reviews
              </PopupButton>
              <PopupContent modalOpen={activePopup === 'reviews'}>
                <p>Reviews content</p>
              </PopupContent>
            </div>
          </PopupContainer>
          <DecorLine></DecorLine>
        </ModalContent>
      </ModalWrapper>
    </>
  );
};

export default Modal;
