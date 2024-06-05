import React from 'react';
import { StyledDatePicker } from './CustomDatePickerStyles';
import { InputField } from '../CustomInput/CustomInputStyles';

const CustomDatePicker = ({ placeholder, value, onChange }) => {
  return (
    <StyledDatePicker
      selected={value}
      onChange={onChange}
      dateFormat="dd/MM/yyyy"
      showYearDropdown
      showMonthDropdown
      dropdownMode="select"
      customInput={<InputField placeholder={placeholder} />}
    />
  );
};

export default CustomDatePicker;
