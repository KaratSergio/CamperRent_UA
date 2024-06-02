import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setFilterType } from '../../redux/filter/slice';
import { fetchCampersAsync } from '../../redux/campers/actions';
import { selectFilteredCampers } from '../../redux/filter/selectors';

import CamperCard from '../CamperCard/CamperCard';
import CamperFilter from '../CamperFilter/CamperFilter';
import { Section, CamperCollection } from './CampersListStyles';

const CampersList = () => {
  const dispatch = useDispatch();
  const filteredCampers = useSelector(selectFilteredCampers);

  useEffect(() => {
    dispatch(setFilterType({ equipment: [], vehicleType: null, location: '' }));
    dispatch(fetchCampersAsync());
  }, [dispatch]);

  return (
    <Section>
      <CamperFilter />
      <CamperCollection>
        {filteredCampers.length > 0 ? (
          filteredCampers.map(camper => <CamperCard key={camper._id} camper={camper} />)
        ) : (
          <p>No campers found matching the criteria.</p>
        )}
      </CamperCollection>
    </Section>
  );
};

export default CampersList;
