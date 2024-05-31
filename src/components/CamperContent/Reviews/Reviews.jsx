import { ReviewsList, ReviewItem, CamperDetail } from './ReviewsStyles';

const Reviews = ({ camper }) => (
  <ReviewsList>
    {camper.reviews.map((review, index) => (
      <ReviewItem key={index}>
        <CamperDetail>
          <strong>{review.reviewer_name}:</strong> {review.comment}
        </CamperDetail>
        <CamperDetail>
          <strong>Rating:</strong> {review.reviewer_rating}
        </CamperDetail>
      </ReviewItem>
    ))}
  </ReviewsList>
);

export default Reviews;
