import { AmenitiesList, AmenityItem } from './AmenitiesStyles';

const Amenities = ({ camper }) => (
  <AmenitiesList>
    {camper.details.airConditioner !== 0 && <AmenityItem>Air Conditioner</AmenityItem>}
    {camper.details.bathroom !== 0 && <AmenityItem>Bathroom</AmenityItem>}
    {camper.details.kitchen !== 0 && <AmenityItem>Kitchen</AmenityItem>}
    {camper.details.beds !== 0 && <AmenityItem>{camper.details.beds} Beds</AmenityItem>}
    {camper.details.TV !== 0 && <AmenityItem>TV</AmenityItem>}
    {camper.details.CD !== 0 && <AmenityItem>CD Player</AmenityItem>}
    {camper.details.radio !== 0 && <AmenityItem>Radio</AmenityItem>}
    {camper.details.shower !== 0 && <AmenityItem>Shower</AmenityItem>}
    {camper.details.toilet !== 0 && <AmenityItem>Toilet</AmenityItem>}
    {camper.details.freezer !== 0 && <AmenityItem>Freezer</AmenityItem>}
    {camper.details.hob !== 0 && <AmenityItem>{camper.details.hob} Hob</AmenityItem>}
    {camper.details.microwave !== 0 && <AmenityItem>Microwave</AmenityItem>}
    {camper.details.gas !== 0 && <AmenityItem>Gas {camper.details.gas}</AmenityItem>}
    {camper.details.water !== 0 && <AmenityItem>Water {camper.details.water}</AmenityItem>}
    {camper.transmission !== 0 && <AmenityItem>{camper.transmission}</AmenityItem>}
  </AmenitiesList>
);

export default Amenities;
