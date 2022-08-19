import { useFormik } from "formik"
import Link from "next/link"
import { loginValidate } from "../../utils/validation"
import styles from "./styles.module.css"
import {
  ContainedButton,
  Checkbox,
  InputField,
  Layout,
  PasswordField,
  Title,
  Wrapper,
} from "../../components"
import { login } from "../../apis"
import { useRouter } from "next/router"

export default function Login() {
  const router = useRouter()
  const { errors, values, touched, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidate,
    onSubmit: async (values, { setFieldError }) => {
      try {
        const message = await login(values)

        if ((message = "Success")) router.push("/list")
        // await dispatch(authActions.loginAsync(values))
        // unwrapResult(await dispatch(authActions.getProfile()))
        // navigate('/bot/manage', { replace: true })
      } catch (e) {
        console.log(e)
        setFieldError("email", "Email doesn't exist")
      }
    },
  })

  return (
    <form onSubmit={handleSubmit}>
      <Wrapper width="500px">
        <Title>Login</Title>

        <Layout mt="48px" fullWidth>
          <InputField
            name="email"
            placeholder="Enter your email"
            label="Email"
            value={values.email}
            onChange={handleChange}
          />
        </Layout>

        <Layout mt="24px" fullWidth>
          <PasswordField
            name="password"
            placeholder="....."
            label="Password"
            value={values.password}
            onChange={handleChange}
          />
        </Layout>

        <Layout mt="24px" fullWidth>
          <Checkbox label="Remember me" />
        </Layout>

        <Layout mt="24px">
          <ContainedButton
            text="Login"
            type="submit"
            style={{ paddingLeft: "50px", paddingRight: "50px" }}
          />
        </Layout>

        <Layout mt="24px">
          <div className={styles.helper}>
            <span>You don't have an account?&nbsp;</span>
            <Link href="/auth/register">Sign up</Link>
          </div>
        </Layout>
      </Wrapper>
    </form>
  )
}
