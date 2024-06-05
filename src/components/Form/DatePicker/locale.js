import { enGB } from 'date-fns/locale';

const customLocale = {
  ...enGB,
  localize: {
    ...enGB.localize,
    day: (n) => ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'][n],
  },
};

export default customLocale;
