import { AmenitiesList, AmenityItem } from './AmenitiesStyles';
import Icon from '../../Icon/Icon';

const capitalizeText = text => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const Amenities = ({ camper, showAll, showTen }) => {
  const amenities = [];
  const keysToShow = [
    'adults',
    'transmission',
    'AC',
    'engine',
    'kitchen',
    'beds',
    'airConditioner',
    'CD',
    'radio',
    'hob',
  ];

  if (camper.adults !== 0)
    amenities.push(
      <AmenityItem key="adults">
        <Icon id="icon-adults" color={'var(--dark-blue)'} strokeColor={'transparent'} />
        {camper.adults} {capitalizeText('adults')}
      </AmenityItem>
    );
  if (camper.transmission !== 0)
    amenities.push(
      <AmenityItem key="transmission">
        <Icon id="icon-transmission" />
        {capitalizeText(camper.transmission)}
      </AmenityItem>
    );
  if (camper.engine !== 0)
    amenities.push(
      <AmenityItem key="engine">
        <Icon id="icon-petrol" color={'var(--dark-blue)'} strokeColor={'transparent'} />
        {capitalizeText(camper.engine)}
      </AmenityItem>
    );
  if (camper.details.kitchen !== 0)
    amenities.push(
      <AmenityItem key="kitchen">
        <Icon id="icon-kitchen" />
        Kitchen
      </AmenityItem>
    );
  if (camper.details.beds !== 0)
    amenities.push(
      <AmenityItem key="beds">
        <Icon id="icon-bed" />
        {camper.details.beds} Beds
      </AmenityItem>
    );
  if (camper.details.airConditioner !== 0)
    amenities.push(
      <AmenityItem key="AC">
        <Icon id="icon-ac" color={'var(--dark-blue)'} strokeColor={'transparent'} />
        AC
      </AmenityItem>
    );
  if (camper.details.TV !== 0)
    amenities.push(
      <AmenityItem key="TV">
        <Icon id="icon-tv" />
        TV
      </AmenityItem>
    );
  if (camper.details.CD !== 0)
    amenities.push(
      <AmenityItem key="CD">
        <Icon id="icon-cd" />
        CD
      </AmenityItem>
    );
  if (camper.details.radio !== 0)
    amenities.push(
      <AmenityItem key="radio">
        <Icon id="icon-radio" />
        Radio
      </AmenityItem>
    );
  if (camper.details.shower !== 0)
    amenities.push(
      <AmenityItem key="shower">
        <Icon id="icon-shower" />
        Shower
      </AmenityItem>
    );
  if (camper.details.toilet !== 0)
    amenities.push(
      <AmenityItem key="toilet">
        <Icon id="icon-toilet" color={'var(--dark-blue)'} strokeColor={'transparent'} />
        Toilet
      </AmenityItem>
    );
  if (camper.details.freezer !== 0)
    amenities.push(
      <AmenityItem key="freezer">
        <Icon id="icon-freezer" />
        Freezer
      </AmenityItem>
    );
  if (camper.details.hob !== 0)
    amenities.push(
      <AmenityItem key="hob">
        <Icon id="icon-hob" />
        {camper.details.hob} Hob
      </AmenityItem>
    );
  if (camper.details.microwave !== 0)
    amenities.push(
      <AmenityItem key="microwave">
        <Icon id="icon-microwave" />
        Microwave
      </AmenityItem>
    );
  if (camper.details.gas !== 0)
    amenities.push(
      <AmenityItem key="gas">
        <Icon id="icon-gas" color={'var(--dark-blue)'} strokeColor={'transparent'} />
        Gas {camper.details.gas}
      </AmenityItem>
    );
  if (camper.details.water !== 0)
    amenities.push(
      <AmenityItem key="water">
        <Icon id="icon-water" />
        Water {camper.details.water}
      </AmenityItem>
    );
  if (camper.details.bathroom !== 0)
    amenities.push(
      <AmenityItem key="bathroom">
        <Icon id="icon-shower" />
        Bathroom
      </AmenityItem>
    );
  if (camper.details.airConditioner !== 0)
    amenities.push(
      <AmenityItem key="airConditioner">
        <Icon id="icon-conditioner" />
        {camper.details.airConditioner} air conditioner
      </AmenityItem>
    );

  const orderedAmenities = [];
  keysToShow.forEach(key => {
    const amenity = amenities.find(item => item.key === key);
    if (amenity) {
      orderedAmenities.push(amenity);
    }
  });

  return (
    <AmenitiesList>
      {showAll ? amenities : showTen ? orderedAmenities.slice(0, 10) : amenities.slice(0, 6)}
    </AmenitiesList>
  );
};

export default Amenities;
