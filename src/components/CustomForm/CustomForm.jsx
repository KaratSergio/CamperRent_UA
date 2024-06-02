import { useForm, FormProvider } from 'react-hook-form';
import { StyledForm, DatePickerWrapper, TitleForm, ButtonForm } from './CustomFormStyles';

import CustomInput from './CustomInput/CustomInput';
import CustomButton from '../CustomButton/CustomButton';
import CustomTextArea from './CustomTextArea/CustomTextArea';
import CustomDatePicker from './CustomDatePicker/CustomDatePicker';

const CustomForm = () => {
  const methods = useForm();
  const { handleSubmit, setValue, watch } = methods;
  const watchDate = watch('date');

  const onSubmit = data => {
    Custom;
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
          <p>Stay connected! We are always ready to help you.</p>
        </TitleForm>
        <CustomInput name="name" type="text" placeholder="Name" />
        <CustomInput name="email" type="email" placeholder="Email" />
        <DatePickerWrapper>
          <CustomDatePicker
            placeholder="Booking date"
            value={watchDate}
            onChange={handleDateChange}
          />
        </DatePickerWrapper>
        <CustomTextArea name="comments" placeholder="Comment" />
        <ButtonForm>
          <CustomButton width="160px" type="submit">
            Send
          </CustomButton>
        </ButtonForm>
      </StyledForm>
    </FormProvider>
  );
};

export default CustomForm;
