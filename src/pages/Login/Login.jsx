import { useState } from "react";
import LoginImg from "../../assets/LoginImg.svg";
import Input from "../../components/Input/Input";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img src={LoginImg} alt="LoginImg" className="w-[40rem]" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                {isSignUp && (
                  <>
                    <Input
                      label="First Name"
                      inputType="text"
                      inputPlaceholder="firstname"
                    />
                    <Input
                      label="Last Name"
                      inputType="text"
                      inputPlaceholder="lastname"
                    />
                  </>
                )}
                <Input
                  label="Email"
                  inputType="email"
                  inputPlaceholder="email"
                />
                <Input
                  label="Password"
                  inputType="password"
                  inputPlaceholder="password"
                />
              </div>
              <button className="btn btn-primary mt-6" type="button">
                {isSignUp ? "Sign up" : "Login"}
              </button>
              <div className="flex flex-col md:flex-row items-center gap-2">
                <span> {isSignUp ? "Already" : "Don't"} have an account?</span>
                <p
                  className="hover:underline hover:cursor-pointer"
                  onClick={toggleForm}
                >
                  {isSignUp ? "Login" : "Sign up"}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
