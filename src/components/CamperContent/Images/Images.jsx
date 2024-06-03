import { useState } from 'react';
import Modal from '../../Custom/Modal/Modal';
import { ImagesContainer, CamperImage } from './ImagesStyles';

const Images = ({ images }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = index => {
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handlePrev = () => {
    setSelectedImageIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setSelectedImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <>
      <ImagesContainer>
        {images.map((image, index) => (
          <CamperImage
            key={index}
            src={image}
            alt={`Image ${index}`}
            onClick={() => openModal(index)}
          />
        ))}
      </ImagesContainer>
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        image={images[selectedImageIndex]}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </>
  );
};

export default Images;
