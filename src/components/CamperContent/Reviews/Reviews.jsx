import { ReviewsList, ReviewItem, ReviewDetail, ReviewAuthor, ReviewerIcon } from './ReviewsStyles';
import StarRating from '../../StarRating/StarRaring';

const Reviews = ({ camper }) => (
  <ReviewsList>
    {camper.reviews.map((review, index) => (
      <ReviewItem key={index}>
        <ReviewDetail>
          <ReviewerIcon>{review.reviewer_name.charAt(0)}</ReviewerIcon>
          <ReviewAuthor>
            <p>{review.reviewer_name}</p>
            <strong>
              <StarRating rating={review.reviewer_rating} />
            </strong>
          </ReviewAuthor>
        </ReviewDetail>
        <p>{review.comment}</p>
      </ReviewItem>
    ))}
  </ReviewsList>
);

export default Reviews;
