import { ImagesContainer, CamperImage } from './ImagesStyles';

const Images = ({ images }) => (
  <ImagesContainer>
    {images.map((image, index) => (
      <CamperImage key={index} src={image} alt={`Image ${index}`} />
    ))}
  </ImagesContainer>
);

export default Images;
