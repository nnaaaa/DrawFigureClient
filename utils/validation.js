import * as yup from "yup"

export const loginValidate = yup.object().shape({
  email: yup.string().required("Email is required").email("Invalid Email"),
  password: yup.string().required("Password is required"),
})

export const registerValidate = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().required("Email is required").email("Invalid Email"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
})


export const figureValidate = yup.object().shape({
  symbol: yup.string().required("Symbol is required").length(1, "Symbol must be 1 character"),
  measurement: yup.number().required("Measurement is required").integer("Measurement must be an integer"),
  color: yup.string().required("Color is required").matches(/#(?:[0-9a-fA-F]{3,4}){1,2}/g, "Invalid color"),
})

