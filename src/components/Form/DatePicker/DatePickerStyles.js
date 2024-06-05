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
  .react-datepicker {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 325px;
    border: 1px solid var(--text-gray);
    border-radius: 12px;
  }

  .react-datepicker__month-container {
    width: 325px;
  }

  .react-datepicker__header {
    background-color: transparent;
    border-bottom: 0px solid #ccc;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range {
    background-color: var(--red);
    color: white;
  }

  .react-datepicker__year-dropdown-container--select,
  .react-datepicker__month-dropdown-container--select,
  .react-datepicker__month-year-dropdown-container--select,
  .react-datepicker__year-dropdown-container--scroll,
  .react-datepicker__month-dropdown-container--scroll,
  .react-datepicker__month-year-dropdown-container--scroll {
    display: none;
    margin: 0 15px;
  }

  .react-datepicker__day:hover {
    background-color: #0056b3;
    color: white;
  }

  .react-datepicker__day--keyboard-selected {
    background-color: #0056b3;
    color: white;
  }

  .react-datepicker__day-names {
    display: flex;
    justify-content: space-evenly;
    font-weight: 600;
    font-size: 16px;
    white-space: nowrap;
    margin-top: 20px;
    margin-bottom: 0;
  }

  .react-datepicker__day-name {
    font-weight: 600;
    font-size: 12px;
  }

  .react-datepicker__current-month {
    margin-top: 20px;
    font-size: 24px;
  }

  .react-datepicker__week {
    display: flex;
    justify-content: space-evenly;
    font-weight: 500;
    font-size: 16px;
    gap: 8px;
    white-space: nowrap;
  }

  .react-datepicker__navigation--previous {
    left: 2px;
    top: 26px;
  }

  .react-datepicker__navigation--next {
    right: 2px;
    top: 26px;
  }

  .react-datepicker__navigation-icon::before,
  .react-datepicker__navigation-icon::after {
    border-color: #000;
    width: 12px;
    height: 12px;
  }

  .react-datepicker__triangle {
    display: none;
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  .react-datepicker__input-container {
    width: 100%;
  }
`;
