import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RingLoader } from 'react-spinners';

import { setFilterType } from '../../redux/filter/slice';
import { fetchCampersAsync } from '../../redux/campers/actions';
import { selectFilteredCampers } from '../../redux/filter/selectors';

import Button from '../Custom/Button/Button';
import CamperCard from '../CamperCard/CamperCard';
import CamperFilter from '../CamperFilter/CamperFilter';

import {
  Section,
  CamperCollection,
  CamperCollectionWrapper,
  NoResultMessage,
  StyledRingLoader,
  SpinnerBox,
} from './CampersListStyles';

const CampersList = () => {
  const dispatch = useDispatch();
  const filteredCampers = useSelector(selectFilteredCampers);
  const [visibleCampersCount, setVisibleCampersCount] = useState(4);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    dispatch(setFilterType({ equipment: [], vehicleType: null, location: '' }));
    dispatch(fetchCampersAsync())
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, [dispatch]);

  const handleLoadMore = () => {
    setVisibleCampersCount(prevCount => prevCount + 4);
  };

  const remainingCampersCount = filteredCampers.length - visibleCampersCount;

  useEffect(() => {
    setVisibleCampersCount(4);
  }, [filteredCampers]);

  return (
    <Section>
      <CamperFilter />
      <CamperCollectionWrapper>
        <SpinnerBox>
          <StyledRingLoader color={'var(--dark-blue)'} size={90} loading={isLoading} />
        </SpinnerBox>
        <CamperCollection>
          {filteredCampers.length === 0 ? (
            <NoResultMessage>
              <p>No campers found matching the criteria.</p>
            </NoResultMessage>
          ) : (
            filteredCampers
              .slice(0, visibleCampersCount)
              .map(camper => <CamperCard key={camper._id} camper={camper} />)
          )}
        </CamperCollection>
        {remainingCampersCount > 0 && (
          <Button
            width="175px"
            border="var(--light-gray-accent)"
            background="transparent"
            color="var(--dark-blue)"
            hover="var(--light-gray-accent)"
            onClick={handleLoadMore}
          >
            Load more
          </Button>
        )}
      </CamperCollectionWrapper>
    </Section>
  );
};

export default CampersList;
