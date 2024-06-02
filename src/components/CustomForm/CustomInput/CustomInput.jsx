import { useFormContext } from 'react-hook-form';
import { InputField } from './CustomInputStyles';

const CustomInput = ({ name, type, placeholder }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const validationRules = {
    name: {
      required: 'Name is required',
      maxLength: {
        value: 22,
        message: 'Maximum name length is 22 characters',
      },
    },
    email: {
      required: 'Email is required',
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: 'Please enter a valid email address',
      },
    },
  };

  return (
    <>
      <InputField type={type} placeholder={placeholder} {...register(name, validationRules[name])} />
      {errors[name] && <p>{errors[name].message}</p>}
    </>
  );
};

export default CustomInput;
