import { CamperDetailsList, CamperDetails, VehicleTitle } from './VehicleDetailsStyles';
import { DecorLine } from '../../CamperModal/CamperModalStyles';

const VehicleDetails = ({ camper }) => (
  <>
    <VehicleTitle>Vehicle details</VehicleTitle>
    <DecorLine />
    <CamperDetailsList key={camper._id}>
      <CamperDetails>
        <span>Form</span>
        {camper.form}
      </CamperDetails>
      <CamperDetails>
        <span>Length</span>
        {camper.length}
      </CamperDetails>
      <CamperDetails>
        <span>Width</span>
        {camper.width}
      </CamperDetails>
      <CamperDetails>
        <span>Height</span>
        {camper.height}
      </CamperDetails>
      <CamperDetails>
        <span>Tank</span>
        {camper.tank}
      </CamperDetails>
      <CamperDetails>
        <span>Consumption</span>
        {camper.consumption}
      </CamperDetails>
    </CamperDetailsList>
  </>
);

export default VehicleDetails;
