import styled from 'styled-components';
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

export const StyledDatePicker = styled(DatePicker)`
  .custom-datepicker .react-datepicker {
    background-color: #fff;
  }

  .custom-datepicker .react-datepicker__header {
    display: none;
  }

  .custom-datepicker .react-datepicker__current-month {
    font-weight: bold;
    color: red;
  }

  .custom-datepicker .react-datepicker__day--selected {
    background-color: #fff;
    color: #fff;
  }
`;
