import { AmenitiesList, AmenityItem } from './AmenitiesStyles';

const Amenities = ({ camper, showAll }) => {
  const amenities = [];

  if (camper.details.airConditioner !== 0)
    amenities.push(<AmenityItem key="airConditioner">Air Conditioner</AmenityItem>);
  if (camper.details.bathroom !== 0)
    amenities.push(<AmenityItem key="bathroom">Bathroom</AmenityItem>);
  if (camper.details.kitchen !== 0) amenities.push(<AmenityItem key="kitchen">Kitchen</AmenityItem>);
  if (camper.details.beds !== 0)
    amenities.push(<AmenityItem key="beds">{camper.details.beds} Beds</AmenityItem>);
  if (camper.details.TV !== 0) amenities.push(<AmenityItem key="TV">TV</AmenityItem>);
  if (camper.details.CD !== 0) amenities.push(<AmenityItem key="CD">CD Player</AmenityItem>);
  if (camper.details.radio !== 0) amenities.push(<AmenityItem key="radio">Radio</AmenityItem>);
  if (camper.details.shower !== 0) amenities.push(<AmenityItem key="shower">Shower</AmenityItem>);
  if (camper.details.toilet !== 0) amenities.push(<AmenityItem key="toilet">Toilet</AmenityItem>);
  if (camper.details.freezer !== 0) amenities.push(<AmenityItem key="freezer">Freezer</AmenityItem>);
  if (camper.details.hob !== 0)
    amenities.push(<AmenityItem key="hob">{camper.details.hob} Hob</AmenityItem>);
  if (camper.details.microwave !== 0)
    amenities.push(<AmenityItem key="microwave">Microwave</AmenityItem>);
  if (camper.details.gas !== 0)
    amenities.push(<AmenityItem key="gas">Gas {camper.details.gas}</AmenityItem>);
  if (camper.details.water !== 0)
    amenities.push(<AmenityItem key="water">Water {camper.details.water}</AmenityItem>);
  if (camper.transmission !== 0)
    amenities.push(<AmenityItem key="transmission">{camper.transmission}</AmenityItem>);

  return <AmenitiesList>{showAll ? amenities : amenities.slice(0, 6)}</AmenitiesList>;
};

export default Amenities;
