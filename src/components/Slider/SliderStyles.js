import { styled } from 'styled-components';

export const SliderContainer = styled.div`
  position: relative;
  width: 1000px;
  height: 600px;
  margin-top: 24px;
`;

export const SliderImage = styled.img`
  width: 1000px;
  height: 600px;
  border: 4px double bisque;
  border-radius: 25px;
`;

export const SliderText = styled.strong`
  position: absolute;
  bottom: 4px;
  right: 4px;
  padding: 10px;
  border-bottom-right-radius: 25px;
  background-color: var(--dark-blue);
  color: var(--white);
`;
