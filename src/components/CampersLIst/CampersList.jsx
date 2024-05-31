import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCampersAsync } from '../../redux/campers/actions';
import { selectCampers } from '../../redux/campers/selectors';

import { Section } from './CampersListStyles';
import CamperCard from '../CamperCard/CamperCard';

const CampersList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCampers);

  useEffect(() => {
    dispatch(fetchCampersAsync());
  }, [dispatch]);

  return (
    <Section>
      <ul>
        {campers &&
          campers.map(camper => (
            <CamperCard key={camper._id} camper={camper} />
          ))}
      </ul>
    </Section>
  );
};

export default CampersList;
