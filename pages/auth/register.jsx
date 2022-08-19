import Link from "next/link"
import {
  ContainedButton,
  InputField,
  Layout,
  PasswordField,
  Title,
  Wrapper,
} from "../../components"
import styles from "./styles.module.css"
import { useFormik } from "formik"
import { registerValidate } from "../../utils/validation"

export default function Register() {
  const { errors, values, touched, handleSubmit, handleChange } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerValidate,
    onSubmit: async (values, { setFieldError }) => {
      try {
        // await dispatch(authActions.loginAsync(values))
        // unwrapResult(await dispatch(authActions.getProfile()))
        // navigate('/bot/manage', { replace: true })
      } catch (e) {
        console.error(e)
        setFieldError("email", "Email doesn't exist")
      }
    },
  })

  return (
    <form onSubmit={handleSubmit}>
      <Wrapper width="500px">
        <Title mt="48px">Register</Title>

        <Layout fullWidth flex style={{ justifyContent: "space-between" }}>
          <Layout width="48%">
            <InputField
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              label="First Name"
            />
          </Layout>
          <Layout width="48%">
            <InputField
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              label="Last Name"
            />
          </Layout>
        </Layout>

        <Layout fullWidth mt="24px">
          <InputField
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Enter your email"
            label="Email"
          />
        </Layout>

        <Layout fullWidth mt="24px">
          <PasswordField
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="....."
            label="Password"
          />
        </Layout>

        <Layout fullWidth mt="24px">
          <PasswordForm
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            placeholder="....."
            label="Confirm Password"
          />
        </Layout>

        <Layout mt="24px">
          <ContainedButton
            text="Sign up"
            type="submit"
            style={{ paddingLeft: "50px", paddingRight: "50px" }}
          />
        </Layout>

        <Layout mt="24px">
          <div className={styles.helper}>
            <span>Already have an account?&nbsp;</span>
            <Link href="/auth/login">Login</Link>
          </div>
        </Layout>
      </Wrapper>
    </form>
  )
}
