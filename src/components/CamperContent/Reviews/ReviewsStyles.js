import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ReviewItem = styled.li`
  /* margin: 10px 0; */
`;

export const ReviewDetail = styled.p`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`;

export const ReviewAuthor = styled.p`
  display: flex;
  flex-direction: column;
  font-family: var(--font-semibold);
  font-size: 18px;
`;

export const ReviewerIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--light-gray-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--red);
  font-size: 24px;
`;
