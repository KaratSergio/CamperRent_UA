import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const StyledDatePicker = styled(DatePicker)`
  .react-datepicker {
    font-family: Arial, sans-serif;
  }

  .react-datepicker__header {
    display: none;
  }

  .react-datepicker__current-month {
    font-weight: bold;
    color: red;
  }

  .react-datepicker__day--selected {
    background-color: red;
    color: #fff;
  }
`;
