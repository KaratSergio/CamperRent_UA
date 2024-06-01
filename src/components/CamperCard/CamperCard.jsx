import { useState } from 'react';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
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
          <Button onClick={handleShowMoreClick}>Show more</Button>
        </div>
      </CamperItem>
      {isModalOpen && (
        <Modal
          modalOpen={isModalOpen}
          toggleModal={toggleModal}
          images={camper.gallery}
          name={camper.name}
          rating={camper.rating}
          price={camper.price}
          description={camper.description}
        />
      )}
    </>
  );
};

export default CamperCard;
