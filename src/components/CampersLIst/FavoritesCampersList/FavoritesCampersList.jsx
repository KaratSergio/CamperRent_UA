import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCampers } from '../../../redux/campers/selectors';

import CamperCard from '../../CamperCard/CamperCard';

import {
  Section,
  CamperCollection,
  CamperCollectionWrapper,
  NoResultMessage,
} from '../CampersListStyles';

const FavoritesCampersList = () => {
  const campers = useSelector(selectCampers);
  const [favoriteCampers, setFavoriteCampers] = useState([]);

  useEffect(() => {
    const favorites = Object.keys(localStorage).filter(
      key => key.startsWith('favorite_') && localStorage.getItem(key) === 'true'
    );

    const filteredCampers = campers.filter(camper => favorites.includes(`favorite_${camper._id}`));

    setFavoriteCampers(filteredCampers);
  }, [campers]);

  return (
    <Section>
      <CamperCollectionWrapper>
        <CamperCollection>
          {favoriteCampers.length === 0 ? (
            <NoResultMessage>
              <p>No favorite campers found.</p>
            </NoResultMessage>
          ) : (
            favoriteCampers.map(camper => <CamperCard key={camper._id} camper={camper} />)
          )}
        </CamperCollection>
      </CamperCollectionWrapper>
    </Section>
  );
};

export default FavoritesCampersList;
