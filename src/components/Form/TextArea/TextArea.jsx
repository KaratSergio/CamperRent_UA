import { useFormContext } from 'react-hook-form';
import { TextAreaField } from './TextAreaStyles';

const TextArea = ({ name, placeholder }) => {
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

export default TextArea;
