import Button from '../Button/Button';
import Amenities from '../CamperContent/Amenities/Amenities';

import {
  CamperItem,
  CamperName,
  CamperDetail,
  CamperImage,
  CamperImageBox,
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
          <div>
            <CamperName>{camper.name}</CamperName>
            <CamperDetail>
              <strong>Price:</strong> ${camper.price}
            </CamperDetail>
          </div>
          <div>
            <CamperDetail>
              <strong>Rating:</strong> {camper.rating}
            </CamperDetail>
            <CamperDetail>
              <strong>Location:</strong> {camper.location}
            </CamperDetail>
          </div>
          <CamperDetail>{camper.description}</CamperDetail>
          <Amenities camper={camper} />
          <Button />
        </div>
      </CamperItem>
    </>
  );
};

export default CamperCard;
