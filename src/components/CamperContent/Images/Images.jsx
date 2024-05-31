import { ImagesContainer, CamperImage } from './ImagesStyles';

const Images = ({ camper }) => (
  <ImagesContainer>
    <CamperImage src={camper.gallery[0]} alt={`${camper.name}`} />
    <CamperImage src={camper.gallery[1]} alt={`${camper.name}`} />
    <CamperImage src={camper.gallery[2]} alt={`${camper.name}`} />
  </ImagesContainer>
);

export default Images;
