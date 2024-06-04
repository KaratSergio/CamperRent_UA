import Icon from '../../Icon/Icon';

import { InputWrapper, StyledInput, StyledIcon, StyledDatePicker } from './DatePickerStyles';

const CustomDatePicker = ({ value, onChange }) => {
  return (
    <InputWrapper>
      <StyledIcon>
        <Icon id="icon-calendar" />
      </StyledIcon>
      <StyledDatePicker
        selected={value}
        onChange={onChange}
        dateFormat="dd/MM/yyyy"
        showYearDropdown
        showMonthDropdown
        dropdownMode="select"
        customInput={<StyledInput />}
        className="custom-datepicker"
        placeholderText="Booking date"
      />
    </InputWrapper>
  );
};

export default CustomDatePicker;
