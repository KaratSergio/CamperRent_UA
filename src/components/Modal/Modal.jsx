import { ModalWrapper, ModalContent, CloseButton, PopupButton, PopupContent } from './ModalStyles';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePopup, setActivePopup] = useState('');

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const openPopup = popup => {
    setActivePopup(popup);
  };

  return (
    <>
      <button onClick={toggleModal}>Open Modal</button>
      <ModalWrapper isOpen={isOpen}>
        <ModalContent>
          <CloseButton onClick={toggleModal}>&times;</CloseButton>
          <h2>Modal Title</h2>
          <p>Modal content</p>
          <div>
            <PopupButton onClick={() => openPopup('features')}>Features</PopupButton>
            <PopupContent isOpen={activePopup === 'features'}>
              <p>Features content</p>
            </PopupContent>
          </div>
          <div>
            <PopupButton onClick={() => openPopup('reviews')}>Reviews</PopupButton>
            <PopupContent isOpen={activePopup === 'reviews'}>
              <p>Reviews content</p>
            </PopupContent>
          </div>
        </ModalContent>
      </ModalWrapper>
    </>
  );
};

export default Modal;
