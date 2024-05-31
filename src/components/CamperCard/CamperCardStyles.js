import styled from 'styled-components';

export const CamperItem = styled.li`
  width: 888px;
  height: 358px;
  display: flex;
  margin-bottom: 40px;
  border: 1px solid black;
  padding-bottom: 20px;
`;

export const CamperName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const CamperDetail = styled.p`
  max-width: 520px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const CamperImageBox = styled.div`
  width: 290px;
  height: 310px;
  overflow: hidden;
`;
export const CamperImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
