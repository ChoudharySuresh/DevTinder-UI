import { useForm } from "react-hook-form";
import Profile from "./Profile";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileSchema } from "../../utils/profileschema";

const ProfileContainer = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(profileSchema),
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    console.log("Profile Data", data);
  };
  return (
    <div>
      <Profile
        control={control}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
      />
    </div>
  );
};

export default ProfileContainer;
