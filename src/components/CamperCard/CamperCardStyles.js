import styled from 'styled-components';

export const CamperItem = styled.li`
  width: 888px;
  height: 358px;
  display: flex;
  border: 2px solid var(--light-gray-accent);
  border-radius: 20px;
  padding: 24px;
`;

export const CamperName = styled.h2`
  font-size: 24px;
`;

export const CamperPrice = styled.p`
  font-weight: 600;
  font-size: 24px;
`;

export const BoxAmenities = styled.div`
  margin-bottom: 32px;
  width: 528px;
`;

export const BoxName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const BoxRating = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
`;

export const CamperLocation = styled.p`
  font-family: var(--font-medium);
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const CamperRating = styled.p`
  font-family: var(--font-medium);
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 24px;
    width: 82%;
    height: 2px;
    background-color: currentColor;
  }
`;

export const CamperDetail = styled.p`
  max-width: 520px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 24px;
`;

export const CamperImageBox = styled.div`
  width: 290px;
  height: 310px;
  margin-right: 24px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

export const CamperImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  height: 100%;
  object-fit: cover;
`;

export const CamperFavorite = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
