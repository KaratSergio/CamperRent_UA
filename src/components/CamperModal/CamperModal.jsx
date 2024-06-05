import { useState, useEffect } from 'react';

import Images from '../CamperContent/Images/Images';
import Reviews from '../CamperContent/Reviews/Reviews';
import Amenities from '../CamperContent/Amenities/Amenities';
import VehicleDetails from '../CamperContent/VehicleDetails/VehicleDetails';

import Icon from '../Icon/Icon';
import Form from '../Form/Form';

import { CamperName, CamperLocation } from '../CamperCard/CamperCardStyles';

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
  PopupContentBox,
  RatingModalBox,
  CamperModalRating,
} from './CamperModalStyles';

const Modal = ({
  modalOpen,
  toggleModal,
  images,
  name,
  rating,
  price,
  description,
  location,
  camper,
}) => {
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

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [modalOpen, toggleModal]);

  const openPopup = (popup) => {
    setActivePopup(activePopup === popup ? '' : popup);
  };

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget && modalOpen) {
      toggleModal();
    }
  };

  const handleEscape = (event) => {
    if (event.keyCode === 27 && modalOpen) {
      toggleModal();
    }
  };

  return (
    <>
      <ModalWrapper $modalOpen={modalOpen} onClick={handleOutsideClick}>
        <ModalContent>
          <CloseButton onClick={toggleModal}>&times;</CloseButton>
          <CamperName>{name}</CamperName>
          <RatingModalBox>
            <CamperModalRating>
              <Icon
                id="icon-star"
                width="16"
                height="16"
                color={'var(--yellow)'}
                strokeColor={'var(--yellow)'}
              />
              {rating} ({camper.reviews.length} {camper.reviews.length === 1 ? 'review' : 'reviews'})
            </CamperModalRating>
            <CamperLocation>
              <Icon id="icon-location" width="16" height="16" />
              {location}
            </CamperLocation>
          </RatingModalBox>
          <CamperName>€{price}.00</CamperName>
          <ScrollContainer>
            <Images images={images} />
            <CamperDetail>Description: {description}</CamperDetail>
          </ScrollContainer>
          <PopupContainer>
            <ButtonContainer>
              <PopupButton
                $isActive={activePopup === 'features'}
                onClick={() => openPopup('features')}
              >
                Features
              </PopupButton>
              <PopupButton
                $isActive={activePopup === 'reviews'}
                onClick={() => openPopup('reviews')}
              >
                Reviews
              </PopupButton>
            </ButtonContainer>
            <DecorLine />
            {activePopup && (
              <PopupContent $active={activePopup}>
                {activePopup === 'features' && (
                  <PopupContentBox>
                    <div>
                      <Amenities camper={camper} showAll={false} showTen={true} />
                      <VehicleDetails camper={camper} />
                    </div>
                    <Form />
                  </PopupContentBox>
                )}
                {activePopup === 'reviews' && (
                  <PopupContentBox>
                    <Reviews camper={camper} />
                    <Form />
                  </PopupContentBox>
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
