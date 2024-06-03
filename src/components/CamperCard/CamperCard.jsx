import { useState, useEffect } from 'react';
import CamperModal from '../CamperModal/CamperModal';
import CustomButton from '../CustomButton/CustomButton';
import Amenities from '../CamperContent/Amenities/Amenities';

import {
  BoxName,
  BoxRating,
  BoxAmenities,
  CamperDetail,
  CamperImage,
  CamperImageBox,
  CamperItem,
  CamperName,
  CamperRating,
  CamperFavorite,
} from './CamperCardStyles';
import Icon from '../Icon/Icon';

const CamperCard = ({ camper }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favoriteStatus = localStorage.getItem(`favorite_${camper._id}`) === 'true';
    setIsFavorite(favoriteStatus);
  }, [camper._id]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleFavorite = () => {
    const favoriteKey = `favorite_${camper._id}`;
    const isCurrentlyFavorite = localStorage.getItem(favoriteKey) === 'true';
    localStorage.setItem(favoriteKey, !isCurrentlyFavorite);
    setIsFavorite(!isCurrentlyFavorite);
  };

  return (
    <>
      <CamperItem key={camper._id}>
        <div>
          <CamperImageBox>
            <CamperImage src={camper.gallery[0]} alt={`${camper.name}`} />
          </CamperImageBox>
        </div>
        <div>
          <BoxName>
            <CamperName>{camper.name}</CamperName>
            <CamperFavorite>
              <CamperName>€{camper.price},00</CamperName>
              <button onClick={toggleFavorite}>
                <Icon
                  width={24}
                  height={24}
                  id={isFavorite ? 'icon-like-pressed' : 'icon-like'}
                  color={isFavorite ? 'var(--red)' : 'transparent'}
                  strokeColor={isFavorite ? 'transparent' : 'var(--dark-blue)'}
                />
              </button>
            </CamperFavorite>
          </BoxName>
          <BoxRating>
            <CamperRating>{camper.rating}</CamperRating>
            <CamperRating>{camper.location}</CamperRating>
          </BoxRating>
          <CamperDetail>{camper.description}</CamperDetail>
          <BoxAmenities>
            <Amenities camper={camper} showAll={false} />
          </BoxAmenities>
          <CustomButton width="166px" onClick={toggleModal}>
            Show more
          </CustomButton>
        </div>
      </CamperItem>
      {isModalOpen && (
        <CamperModal
          modalOpen={isModalOpen}
          toggleModal={toggleModal}
          images={camper.gallery}
          name={camper.name}
          rating={camper.rating}
          price={camper.price}
          location={camper.location}
          description={camper.description}
          camper={camper}
        />
      )}
    </>
  );
};

export default CamperCard;
