import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setFilterType } from '../../redux/filter/slice';
import { fetchCampersAsync } from '../../redux/campers/actions';
import { selectFilteredCampers } from '../../redux/filter/selectors';

import CamperCard from '../CamperCard/CamperCard';
import CamperFilter from '../CamperFilter/CamperFilter';
import CustomButton from '../CustomButton/CustomButton';

import {
  Section,
  CamperCollection,
  CamperCollectionWrapper,
  NoResultMessage,
} from './CampersListStyles';

const CampersList = () => {
  const dispatch = useDispatch();
  const filteredCampers = useSelector(selectFilteredCampers);
  const [visibleCampersCount, setVisibleCampersCount] = useState(4);

  useEffect(() => {
    dispatch(setFilterType({ equipment: [], vehicleType: null, location: '' }));
    dispatch(fetchCampersAsync());
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
          <CustomButton
            width="175px"
            borderColor="var(--light-gray-accent)"
            backgroundColor="transparent"
            textColor="var(--dark-blue)"
            hoverBackgroundColor="var(--light-gray-accent)"
            onClick={handleLoadMore}
          >
            Load more
          </CustomButton>
        )}
      </CamperCollectionWrapper>
    </Section>
  );
};

export default CampersList;
