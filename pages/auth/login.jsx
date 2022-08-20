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
import { getProfile, login } from "../../apis"
import { useRouter } from "next/router"
import useSWR from "swr"
import { useEffect } from "react"

export default function Login() {
  const router = useRouter()
  const { data: user, mutate } = useSWR("/auth/me", getProfile)

  const { errors, values, touched, handleSubmit, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidate,
    onSubmit: async (values, { setFieldError }) => {
      try {
        const message = await login(values)
        mutate()
      } catch (e) {
        console.log(e)
        setFieldError("email", "Email doesn't exist")
      }
    },
  })

  useEffect(() => {
    if (user) router.push("/")
  }, [user, router])

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
            <span>You do not have an account? </span>
            <Link href="/auth/register">Sign up</Link>
          </div>
        </Layout>
      </Wrapper>
    </form>
  )
}
