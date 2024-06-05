import styled, { css } from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const StyledInput = styled.input`
  padding: 18px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  background-color: var(--light-gray);
  height: 56px;
  width: 400px;
  ::placeholder {
    color: var(--placeholder-color);
    opacity: 1;
  }
`;

export const StyledIcon = styled.div`
  position: absolute;
  right: 18px;
  z-index: 90;
`;

export const CalendarContainer = styled.div`
  width: 600px;
`;

export const StyledDatePicker = styled(DatePicker)`
  .react-datepicker {
    background-color: #fff;
  }

  .react-datepicker__header {
    display: none;
  }

  .react-datepicker__current-month {
    font-weight: bold;
    color: red;
  }

  .react-datepicker__day--selected {
    background-color: #fff;
    color: #fff;
  }
`;
