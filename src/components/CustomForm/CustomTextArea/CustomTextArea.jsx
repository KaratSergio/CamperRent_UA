import { useFormContext } from 'react-hook-form';
import { TextAreaField } from './CustomTextAreaStyles';

const CustomTextArea = ({ name, placeholder }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <TextAreaField placeholder={placeholder} {...register(name)} />
      {errors[name] && <p>{errors[name].message}</p>}
    </>
  );
};

export default CustomTextArea;
