import { useState, useEffect } from 'react';
import Button from '../Custom/Button/Button';
import CamperModal from '../CamperModal/CamperModal';
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
  CamperPrice,
  CamperLocation,
} from './CamperCardStyles';
import Icon from '../Icon/Icon';

const CamperCard = ({ camper }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [shortenedName, setShortenedName] = useState(camper.name);

  useEffect(() => {
    const favoriteStatus = localStorage.getItem(`favorite_${camper._id}`) === 'true';
    setIsFavorite(favoriteStatus);
  }, [camper._id]);

  useEffect(() => {
    if (camper.name.length > 30) {
      setShortenedName(camper.name.slice(0, 27) + '...');
    } else {
      setShortenedName(camper.name);
    }
  }, [camper.name]);

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
            <CamperName>{shortenedName}</CamperName>
            <CamperFavorite>
              <CamperPrice>€{camper.price}.00</CamperPrice>
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
            <CamperRating>
              <Icon
                id="icon-star"
                width="16"
                height="16"
                color={'var(--yellow)'}
                strokeColor={'var(--yellow)'}
              />
              {camper.rating} ({camper.reviews.length}{' '}
              {camper.reviews.length === 1 ? 'review' : 'reviews'})
            </CamperRating>
            <CamperLocation>
              <Icon id="icon-location" width="16" height="16" />
              {camper.location}
            </CamperLocation>
          </BoxRating>
          <CamperDetail>{camper.description}</CamperDetail>
          <BoxAmenities>
            <Amenities camper={camper} />
          </BoxAmenities>
          <Button width="166px" onClick={toggleModal}>
            Show more
          </Button>
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
