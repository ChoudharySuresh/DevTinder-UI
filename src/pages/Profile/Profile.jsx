import Input from "../../components/Input/Input";

const Profile = ({
  userInfo,
  control,
  handleSubmit,
  onSubmit,
  errors,
  handleAddSkill,
  handleRemoveSkill,
  skillInput,
  setSkillInput,
  skills,
}) => {
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
              {/* Skills Input */}
              <div className="mt-4">
                <label htmlFor="skills" className="block text-sm font-medium">
                  Skills
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    placeholder="Add a skill"
                    className="input input-bordered w-full mt-2 "
                  />
                  <button
                    type="button"
                    onClick={handleAddSkill}
                    className="btn btn-md btn-primary"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[50%]">
              {skills?.map((skill, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center bg-gray-600 justify-between text-white px-3 py-1 rounded-md mt-2"
                  >
                    <span>{skill}</span>
                    <button
                      className="btn btn-circle btn-sm"
                      onClick={() => handleRemoveSkill(index)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                );
              })}
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
