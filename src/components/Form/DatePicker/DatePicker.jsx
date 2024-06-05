// CustomDatePicker.js
import { useFormContext } from 'react-hook-form';
import Icon from '../../Icon/Icon';
import { InputWrapper, StyledInput, StyledIcon, StyledDatePicker } from './DatePickerStyles';

const CustomDatePicker = ({ value, onChange, required }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const validationRules = {
    date: {
      required: 'Booking date is required',
    },
  };

  return (
    <>
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
          customInput={
            <StyledInput {...register('date', { ...validationRules['date'], required })} />
          }
          placeholderText="Booking date"
        />
      </InputWrapper>
      {errors['date'] && <p>{errors['date'].message}</p>}
    </>
  );
};

export default CustomDatePicker;
