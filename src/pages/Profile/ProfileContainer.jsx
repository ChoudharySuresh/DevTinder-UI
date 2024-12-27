import { useForm } from "react-hook-form";
import Profile from "./Profile";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileSchema } from "../../utils/profileschema";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ConfirmationModal from "../../components/Modal/ConfirmationModal";

const ProfileContainer = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const [formData, setFormData] = useState();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(profileSchema),
    mode: "onTouched",
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      photoUrl: "",
      about: "",
      skills: "",
    },
  });

  const skills = watch("skills");
  console.log("Profile Info Skills", skills);
  useEffect(() => {
    if (userInfo) {
      reset({
        firstName: userInfo?.firstName || "",
        lastName: userInfo?.lastName || "",
        age: userInfo?.age || "",
        gender: userInfo?.gender || "",
        photoUrl: userInfo?.photoUrl || "",
        about: userInfo?.about || "",
        skills: userInfo.skills ? userInfo.skills.join(", ") : "",
      });
    }
  }, [userInfo, reset]);
  console.log("UserInfo In The Profile Container", userInfo);

  const onSubmit = (data) => {
    setFormData(data);
    document.getElementById("my_modal_3").showModal();
  };

  const handleConfirm = () => {
    console.log("Profile Data", formData);
    document.getElementById("my_modal_3").close();
  };
  const handleCancel = () => {
    document.getElementById("my_modal_3").close();
  };

  return (
    <div>
      <Profile
        userInfo={userInfo}
        control={control}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
      />
      <ConfirmationModal
        heading="Confirmation ?"
        subHeading="Are You Sure You Want to Update the Profile"
        handleConfirm={handleConfirm}
        handleCancel={handleCancel}
      />
    </div>
  );
};

export default ProfileContainer;
