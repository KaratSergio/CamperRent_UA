import { useForm, useFormContext, FormProvider } from 'react-hook-form';
import { StyledForm, DatePickerWrapper, TitleForm, ButtonFormBox, FormText } from './FormStyles';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Input from './Input/Input';
import TextArea from './TextArea/TextArea';
import CustomDatePicker from '../Form/DatePicker/DatePicker';
import Button from '../Custom/Button/Button';

const Form = () => {
  const methods = useForm();
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = methods;
  const watchDate = watch('date');

  const onSubmit = data => {
    const { name, email, date } = data;
    if (!name || !email || !date) {
      toast.error('Please fill in all required fields.');
      return;
    }

    window.location.reload();
  };

  const handleDateChange = date => {
    setValue('date', date);
  };

  return (
    <FormProvider {...methods}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <ToastContainer position="top-center" />
        <TitleForm>
          <h2>Book your campervan now</h2>
          <FormText>Stay connected! We are always ready to help you.</FormText>
        </TitleForm>
        <Input name="name" type="text" placeholder="Name" />
        <Input name="email" type="email" placeholder="Email" />
        <DatePickerWrapper>
          <CustomDatePicker
            name="date"
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
        {Object.keys(errors).length > 0 && <p>Please fill in all required fields.</p>}
      </StyledForm>
    </FormProvider>
  );
};

export default Form;
