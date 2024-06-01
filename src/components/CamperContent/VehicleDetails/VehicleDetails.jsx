import { CamperDetailsList, CamperDetails } from './VehicleDetailsStyles';

const VehicleDetails = ({ camper }) => (
  <CamperDetailsList key={camper._id}>
    <CamperDetails>{camper.form}</CamperDetails>
    <CamperDetails>{camper.length}</CamperDetails>
    <CamperDetails>{camper.width}</CamperDetails>
    <CamperDetails>{camper.height}</CamperDetails>
    <CamperDetails>{camper.tank}</CamperDetails>
    <CamperDetails>{camper.consumption}</CamperDetails>
  </CamperDetailsList>
);

export default VehicleDetails;
