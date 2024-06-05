import { useState, useEffect } from 'react';

import { SliderContainer, SliderImage, SliderText } from './SliderStyles';

const Slider = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <SliderContainer>
      <SliderImage src={images[index]} alt={`Slide ${index}`} />
      <SliderText>Rent camping vehicles for your ideal outdoor holiday!</SliderText>
    </SliderContainer>
  );
};

export default Slider;
