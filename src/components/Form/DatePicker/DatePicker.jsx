import { useFormContext } from 'react-hook-form';
import Icon from '../../Icon/Icon';
import customLocale from './locale';
import {
  InputWrapper,
  StyledInput,
  StyledIcon,
  StyledDatePicker,
  CalendarContainer,
} from './DatePickerStyles';

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
        <CalendarContainer>
          <StyledDatePicker
            selected={value}
            onChange={onChange}
            dateFormat="dd.MM.yyyy"
            showYearDropdown
            showMonthDropdown
            locale={customLocale}
            dropdownMode="select"
            customInput={
              <StyledInput {...register('date', { ...validationRules['date'], required })} />
            }
            placeholderText="Booking date"
          />
        </CalendarContainer>
      </InputWrapper>
      {errors['date'] && <p>{errors['date'].message}</p>}
    </>
  );
};

export default CustomDatePicker;
