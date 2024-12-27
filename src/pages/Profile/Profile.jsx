import Input from "../../components/Input/Input";

const Profile = ({ control, handleSubmit, onSubmit, errors }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card w-full max-w-[70rem] mx-4 md:mx-0 lg:card-side bg-base-300 shadow-xl">
        <div className="p-4">
          {/* img div */}
          <div className="bg-red-200  h-[200px] rounded-xl"></div>
          <div className="flex flex-col gap-2 mt-5">
            <p>Suresh Choudhary</p>
            <p>20</p>
            <p>Male</p>
            <p>This is just dummy About Section.</p>
            <p>Skills Goes Here</p>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">Edit Profile</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2">
              {/* First */}
              <div>
                <Input
                  label="First Name"
                  inputType="text"
                  inputPlaceholder="first name"
                  {...control.register("firstName")}
                />
                {errors.firstName && (
                  <p className="text-red-400 mt-2">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <Input
                  label="Last Name"
                  inputType="text"
                  inputPlaceholder="last name"
                  {...control.register("lastName")}
                />
                {errors.lastName && (
                  <p className="text-red-400 mt-2">{errors.lastName.message}</p>
                )}
              </div>

              <div>
                <Input
                  label="Age"
                  inputType="text"
                  inputPlaceholder="age"
                  {...control.register("age")}
                />
                {errors.age && (
                  <p className="text-red-400 mt-2">{errors.age.message}</p>
                )}
              </div>
              <div>
                <Input
                  label="Gender"
                  inputType="text"
                  inputPlaceholder="gender"
                  {...control.register("gender")}
                />
                {errors.gender && (
                  <p className="text-red-400 mt-2">{errors.gender.message}</p>
                )}
              </div>
              <div>
                <Input
                  label="Photo URL"
                  inputType="text"
                  inputPlaceholder="Photo URL"
                  {...control.register("photoURL")}
                />
                {errors.photoURL && (
                  <p className="text-red-400 mt-2">{errors.photoURL.message}</p>
                )}
              </div>
              <div>
                <Input
                  label="About"
                  inputType="text"
                  inputPlaceholder="about"
                  {...control.register("about")}
                />
                {errors.about && (
                  <p className="text-red-400 mt-2">{errors.about.message}</p>
                )}
              </div>
              <div>
                <Input
                  label="Skills"
                  inputType="text"
                  inputPlaceholder="Skills"
                  {...control.register("skills")}
                />
                {errors.skills && (
                  <p className="text-red-400 mt-2">{errors.skills.message}</p>
                )}
              </div>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary" type="submit">
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
