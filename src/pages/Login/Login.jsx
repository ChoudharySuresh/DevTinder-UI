import LoginImg from "../../assets/LoginImg.svg";
import Input from "../../components/Input/Input";

const Login = ({
  isSignUp,
  toggleForm,
  control,
  handleSubmit,
  onSubmit,
  errors,
  signUpError,
  loginError,
}) => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img src={LoginImg} alt="LoginImg" className="w-[40rem]" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                {isSignUp && (
                  <>
                    <Input
                      label="First Name"
                      inputType="text"
                      inputPlaceholder="firstname"
                      {...control.register("firstName")}
                    />
                    {errors.firstName && (
                      <p className="text-red-400">{errors.firstName.message}</p>
                    )}
                    <Input
                      label="Last Name"
                      inputType="text"
                      inputPlaceholder="lastname"
                      {...control.register("lastName")}
                    />
                    {errors.lastName && (
                      <p className="text-red-400">{errors.lastName.message}</p>
                    )}
                  </>
                )}
                <Input
                  label="Email"
                  inputType="email"
                  inputPlaceholder="email"
                  {...control.register("emailId")}
                />
                {errors.emailId && (
                  <p className="text-red-400">{errors.emailId.message}</p>
                )}
                <Input
                  label="Password"
                  inputType="password"
                  inputPlaceholder="password"
                  {...control.register("password")}
                />
                {errors.password && (
                  <p className="text-red-400">{errors.password.message}</p>
                )}
              </div>
              <button className="btn btn-primary mt-6" type="submit">
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
              {isSignUp
                ? signUpError && <p className="text-red-600 text-center">{signUpError?.response?.data?.message}</p>
                : loginError && (
                    <p className="text-red-600 text-center">
                      {loginError?.response?.data?.message}
                    </p>
                  )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
