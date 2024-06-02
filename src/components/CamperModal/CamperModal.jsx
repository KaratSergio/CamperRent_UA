import { useState, useEffect } from 'react';
import Images from '../CamperContent/Images/Images';
import CustomForm from '../CustomForm/CustomForm';
import VehicleDetails from '../CamperContent/VehicleDetails/VehicleDetails';
import Amenities from '../CamperContent/Amenities/Amenities';

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
  PopupContentBox,
} from './CamperModalStyles';

const Modal = ({ modalOpen, toggleModal, images, name, rating, price, description, camper }) => {
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
                  <PopupContentBox>
                    <div>
                      <Amenities camper={camper} showAll={true} />
                      <VehicleDetails camper={camper} />
                    </div>
                    <CustomForm />
                  </PopupContentBox>
                )}
                {activePopup === 'reviews' && (
                  <PopupContentBox>
                    <CustomForm />
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
