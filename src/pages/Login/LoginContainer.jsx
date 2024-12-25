import { useEffect, useState } from "react";
import Login from "./Login";
import useLoginForm from "../../Hooks/Auth/useLoginForm";
import { useLoginUser, useSignUpUser } from "../../services/mutation";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/User/userSlice";

const LoginContainer = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const { control, handleSubmit, errors, reset } = useLoginForm(isSignUp);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signUpMutation = useSignUpUser();
  const loginMutation = useLoginUser();

  // HandleSumbit function
  const onSubmit = (data) => {
    if (isSignUp) {
      signUpMutation.mutate(data);
      console.log("Sign Up Data:", data);
    } else {
      loginMutation.mutate(data);
    }
  };
  // Handling SignUp User API Response
  useEffect(() => {
    if (signUpMutation.isSuccess) {
      const { data } = signUpMutation.data;
      dispatch(addUser(data));
      reset();
      navigate("/profile");
      setIsSignUp(false);
    }
  }, [signUpMutation.isSuccess, reset]);

  // Handling Login User API Response
  useEffect(() => {
    if (loginMutation.isSuccess) {
      const { data } = loginMutation.data;
      dispatch(addUser(data));
      navigate("/feed");
    }
  }, [loginMutation.isSuccess, navigate]);

  const toggleForm = () => {
    reset();
    setIsSignUp(!isSignUp);
  };

  return (
    <Login
      isSignUp={isSignUp}
      toggleForm={toggleForm}
      control={control}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
      signUpError={signUpMutation.error}
      loginError={loginMutation.error}
    />
  );
};

export default LoginContainer;
