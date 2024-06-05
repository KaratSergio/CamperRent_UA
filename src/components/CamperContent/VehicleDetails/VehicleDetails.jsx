import React from 'react';
import { CamperDetailsList, CamperDetails, VehicleTitle } from './VehicleDetailsStyles';
import { DecorLine } from '../../CamperModal/CamperModalStyles';

const capitalizeText = text => {
  const words = text.split(/(?=[A-Z])/);
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalizedWords.join(' ');
};

const addSpaceBeforeLastCharacter = value => {
  return value.replace(/.$/, ' $&');
};

const VehicleDetails = ({ camper }) => {
  return (
    <>
      <VehicleTitle>Vehicle details</VehicleTitle>
      <DecorLine />
      <CamperDetailsList key={camper._id}>
        <CamperDetails>
          <span>Form</span>
          {capitalizeText(camper.form)}
        </CamperDetails>
        <CamperDetails>
          <span>Length</span>
          {addSpaceBeforeLastCharacter(camper.length)}
        </CamperDetails>
        <CamperDetails>
          <span>Width</span>
          {addSpaceBeforeLastCharacter(camper.width)}
        </CamperDetails>
        <CamperDetails>
          <span>Height</span>
          {addSpaceBeforeLastCharacter(camper.height)}
        </CamperDetails>
        <CamperDetails>
          <span>Tank</span>
          {addSpaceBeforeLastCharacter(camper.tank)}
        </CamperDetails>
        <CamperDetails>
          <span>Consumption</span>
          {addSpaceBeforeLastCharacter(camper.consumption)}
        </CamperDetails>
      </CamperDetailsList>
    </>
  );
};

export default VehicleDetails;
