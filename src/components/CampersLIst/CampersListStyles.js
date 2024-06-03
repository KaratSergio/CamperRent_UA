import styled from 'styled-components';

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
  flex-direction: column;
  gap: 32px;
  margin-bottom: 50px;
`;
