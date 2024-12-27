import * as yup from "yup";

export const profileSchema = yup.object({
  firstName: yup.string().required("First Name is Required"),
  lastName: yup.string().required("Last Name is Required"),
  age: yup
    .number()
    .typeError("Age Must be Number")
    .positive("Age Must be Positive Number")
    .integer("Age Must be an integer")
    .required("Age is Required"),

  gender: yup
    .string()
    .oneOf(["Male", "Female", "Other"], "Gender must be Male, Female, or Other")
    .required("Gender is required"),
  photoUrl: yup
    .string()
    .url("Photo URL must be Valid URL")
    .required("Photo URL is required"),
  about: yup
    .string()
    .max(200, "About cannot be exceed 200 characters")
    .required("About is required"),
  skills: yup
    .string()
    .required("SKills is required")
    .test(
      "skills-list",
      "skills must be comma-separated list",
      (value) =>
        !value || value.split(",").every((skill) => skill.trim() !== "")
    ),
});
