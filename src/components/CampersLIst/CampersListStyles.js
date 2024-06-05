import styled from 'styled-components';
import { RingLoader } from 'react-spinners';

export const Section = styled.section`
  max-width: 1440px;
  display: flex;
`;
export const NoResultMessage = styled.div`
  width: 888px;
  height: 600px;
  font-family: var(--font-semibold);
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CamperCollectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CamperCollection = styled.section`
  display: flex;
  gap: 32px;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const SpinnerBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
`;
export const StyledRingLoader = styled(RingLoader)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
