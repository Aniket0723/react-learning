import * as Yup from "yup";

export const FormSchema = Yup.object({
  name: Yup.string()
    .min(3)
    .max(20)
    .required("Name is must"),
  email: Yup.string()
    .email()
    .required("Email is must"),
  age: Yup.number()
    .min(10)
    .max(50)
    .required("Age is must"),
  pass: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Enter Strong Password"
    ),
    cpass: Yup.string()
    .required(" Confirm Password is required")
    .oneOf([Yup.ref('pass'),null],"Both Password Must Match")
});
