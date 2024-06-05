import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  gap: 24px;
  flex-direction: column;
`;

export const ReviewItem = styled.li`
  width: 430px;
`;

export const ReviewDetail = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: 16px;
`;

export const ReviewComment = styled.p`
  letter-spacing: 0.02em;
  line-height: 1.5em;
`;

export const ReviewAuthor = styled.div`
  display: flex;
  font-size: 18px;
  flex-direction: column;
  font-family: var(--font-semibold);
`;

export const ReviewerIcon = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  font-size: 24px;
  font-weight: 600;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  color: var(--red);
  font-family: var(--font-semibold);
  background-color: var(--light-gray-accent);
`;
