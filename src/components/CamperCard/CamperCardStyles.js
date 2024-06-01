import styled from 'styled-components';

export const CamperItem = styled.li`
  width: 888px;
  height: 358px;
  display: flex;
  border: 1px solid var(--light-gray-accent);
  border-radius: 20px;
  padding: 24px;
`;

export const CamperName = styled.h2`
  font-size: 24px;
`;

export const BoxAmenities = styled.div`
  margin-bottom: 24px;
`;

export const BoxName = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const BoxRating = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

export const CamperRating = styled.p`
  font-family: var(--font-medium);
`;

export const CamperDetail = styled.p`
  max-width: 520px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 36px;
`;

export const CamperImageBox = styled.div`
  width: 290px;
  height: 310px;
  margin-right: 24px;
  overflow: hidden;
`;
export const CamperImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;
