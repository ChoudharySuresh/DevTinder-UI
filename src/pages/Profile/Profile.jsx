import Input from "../../components/Input/Input";

const Profile = ({ userInfo, control, handleSubmit, onSubmit, errors }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card w-full max-w-[70rem] mx-4 md:mx-0 lg:card-side bg-base-300 shadow-xl">
        <div className="p-4">
          {/* img div */}
          <div className="rounded-xl">
            <img
              src={userInfo?.photoUrl}
              alt="profilePhoto"
              className="h-[15rem] rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <p>
              {userInfo?.firstName} {userInfo?.lastName}
            </p>
            <p>{userInfo?.age || "-"}</p>
            <p>{userInfo?.gender || "-"}</p>
            <p>{userInfo?.about || "-"}</p>
            <div className="mt-2">
              {userInfo?.skills?.map((item) => {
                return (
                  <>
                    <span
                      key={item}
                      className="bg-gray-100 text-gray-800 text-base font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300"
                    >
                      {item}
                    </span>
                  </>
                );
              })}
            </div>
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
                  {...control.register("photoUrl")}
                />
                {errors.photoUrl && (
                  <p className="text-red-400 mt-2">{errors.photoUrl.message}</p>
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
