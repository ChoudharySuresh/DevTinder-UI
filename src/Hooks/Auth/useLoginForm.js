import { useForm } from "react-hook-form";
import { getAuthSchema } from "../../utils/formschema";
import { yupResolver } from "@hookform/resolvers/yup";

const useLoginForm = (isSignUp) => {
  const schema = getAuthSchema(isSignUp);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  return { control, handleSubmit, errors, reset };
};

export default useLoginForm;
