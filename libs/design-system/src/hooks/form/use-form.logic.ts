import { useForm } from 'react-hook-form';

const useFormLogic = (props: any): any => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
    trigger,
  } = useForm(props);

  return {
    formErrors: errors,
    onTrigger: trigger,
    onControl: control,
    onHandleSubmit: handleSubmit,
    onReset: reset,
  };
};

export default useFormLogic;
