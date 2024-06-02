import { useState } from 'react';
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
} from './CamperCardStyles';

const CamperCard = ({ camper }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCamperId, setActiveCamperId] = useState(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleShowMoreClick = () => {
    setActiveCamperId(camper._id);
    toggleModal();
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
            <CamperName>€{camper.price},00</CamperName>
          </BoxName>
          <BoxRating>
            <CamperRating>{camper.rating}</CamperRating>
            <CamperRating>{camper.location}</CamperRating>
          </BoxRating>
          <CamperDetail>{camper.description}</CamperDetail>
          <BoxAmenities>
            <Amenities camper={camper} showAll={false} />
          </BoxAmenities>
          <CustomButton onClick={handleShowMoreClick}>Show more</CustomButton>
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
