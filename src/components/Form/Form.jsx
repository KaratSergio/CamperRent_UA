import { useForm, FormProvider } from 'react-hook-form';
import { StyledForm, DatePickerWrapper, TitleForm, ButtonFormBox, FormText } from './FormStyles';

import Input from './Input/Input';
import TextArea from './TextArea/TextArea';
import CustomDatePicker from '../Form/DatePicker/DatePicker';
import Button from '../Custom/Button/Button';

const Form = () => {
  const methods = useForm();
  const { handleSubmit, setValue, watch } = methods;
  const watchDate = watch('date');

  const onSubmit = data => {
    console.log(data);
  };

  const handleDateChange = date => {
    setValue('date', date);
  };

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <TitleForm>
          <h2>Book your campervan now</h2>
          <FormText>Stay connected! We are always ready to help you.</FormText>
        </TitleForm>
        <Input name="name" type="text" placeholder="Name" />
        <Input name="email" type="email" placeholder="Email" />
        <DatePickerWrapper>
          <CustomDatePicker
            name="email"
            type="text"
            placeholder="Booking date"
            value={watchDate}
            onChange={handleDateChange}
          />
        </DatePickerWrapper>
        <TextArea name="comments" placeholder="Comment" />
        <ButtonFormBox>
          <Button width="160px" type="submit">
            Send
          </Button>
        </ButtonFormBox>
      </StyledForm>
    </FormProvider>
  );
};

export default Form;
