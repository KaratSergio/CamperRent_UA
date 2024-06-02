import { ReviewsList, ReviewItem, ReviewDetail, ReviewAuthor, ReviewerIcon } from './ReviewsStyles';

const Reviews = ({ camper }) => (
  <ReviewsList>
    {camper.reviews.map((review, index) => (
      <ReviewItem key={index}>
        <ReviewDetail>
          <ReviewerIcon>{review.reviewer_name.charAt(0)}</ReviewerIcon>
          <ReviewAuthor>
            <p>{review.reviewer_name}</p>
            <strong>{review.reviewer_rating}</strong>
          </ReviewAuthor>
        </ReviewDetail>
        <p>{review.comment}</p>
      </ReviewItem>
    ))}
  </ReviewsList>
);

export default Reviews;
