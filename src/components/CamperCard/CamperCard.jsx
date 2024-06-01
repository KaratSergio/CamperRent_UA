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
          <Button>Show more</Button>
        </div>
      </CamperItem>
    </>
  );
};

export default CamperCard;
