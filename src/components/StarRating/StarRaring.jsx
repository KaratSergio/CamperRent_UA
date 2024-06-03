import Icon from '../Icon/Icon';
import { StarRatingWrapper } from './StarRatingStyles';

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i += 1) {
    stars.push(
      <Icon
        key={i}
        id="icon-star"
        color={i <= rating ? 'var(--yellow)' : 'var(--light-gray-accent)'}
        strokeColor={i <= rating ? 'var(--yellow)' : 'var(--light-gray-accent)'}
      />
    );
  }
  return <StarRatingWrapper>{stars}</StarRatingWrapper>;
};

export default StarRating;
