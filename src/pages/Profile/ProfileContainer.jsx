import { useForm } from "react-hook-form";
import Profile from "./Profile";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileSchema } from "../../utils/profileschema";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ConfirmationModal from "../../components/Modal/ConfirmationModal";
import { useUpdateProfile } from "../../services/mutation";

const ProfileContainer = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const [formData, setFormData] = useState();
  const [skillInput, setSkillInput] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
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
      skills: [],
    },
  });
  const updateProfileMutation = useUpdateProfile();

  const skills = watch("skills");

  useEffect(() => {
    if (userInfo) {
      reset({
        firstName: userInfo?.firstName || "",
        lastName: userInfo?.lastName || "",
        age: userInfo?.age || "",
        gender: userInfo?.gender || "",
        photoUrl: userInfo?.photoUrl || "",
        about: userInfo?.about || "",
        skills: userInfo.skills || [],
      });
    }
  }, [userInfo, reset]);

  // Handling Form Submission
  const onSubmit = (data) => {
    setFormData(data);
    document.getElementById("my_modal_3").showModal();
  };

  const handleConfirm = () => {
    console.log("Profile Data", formData);
    if (formData) {
      updateProfileMutation.mutate(formData);
    }
    if (updateProfileMutation.isSuccess) {
      document.getElementById("my_modal_3").close();
    }
  };
  const handleCancel = () => {
    document.getElementById("my_modal_3").close();
  };

  // Skills Input To Push into array
  const handleAddSkill = () => {
    if (skillInput.trim()) {
      setValue("skills", [...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = skills?.filter((_, i) => i !== index);
    setValue("skills", updatedSkills);
  };

  console.log(
    "Update Profile Status ",
    updateProfileMutation.isSuccess,
    updateProfileMutation.data,
    "Update Profile Error",
    updateProfileMutation.isError,
    updateProfileMutation.error
  );

  return (
    <div>
      <Profile
        userInfo={userInfo}
        control={control}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        handleAddSkill={handleAddSkill}
        handleRemoveSkill={handleRemoveSkill}
        skillInput={skillInput}
        setSkillInput={setSkillInput}
        skills={skills}
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
