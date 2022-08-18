import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons"
import { useFormik } from "formik"
import Link from "next/link"
import {
  ContainedButton,
  InputField,
  Layout,
  SelectField,
  TextButton,
  Title,
  Wrapper,
} from "../../components"
import { figureValidate } from "../../utils/validation"

export const options = [
  { label: "Rectangle", value: "rectangle" },
  { label: "Perfect Triangle", value: "perfect triangle" },
  { label: "Diamond", value: "diamond" },
]

function Input() {
  const { errors, values, touched, handleSubmit, handleChange,setFieldValue } = useFormik({
    initialValues: {
      symbol: "",
      shape: "",
      measurement: "",
      color:""
    },
    validationSchema: figureValidate,
    onSubmit: async (values, { setFieldError }) => {
      try {
        // await dispatch(authActions.loginAsync(values))
        // unwrapResult(await dispatch(authActions.getProfile()))
        // navigate('/bot/manage', { replace: true })
        console.log(values)
      } catch {
        console.log("error")
        setFieldError("email", "Email doesn't exist")
      }
    },
  })

  console.log(errors)

  return (
    <Wrapper width="770px" height="90vh">
      <Layout fullWidth style={{ position: "relative" }}>
        <Layout
          style={{
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translateY(-50%)",
            alignItems: "center",
          }}
        >
          <Link href="/list">
            <TextButton text="Back to list" startIcon={faArrowLeftLong} />
          </Link>
        </Layout>
        <Title>Create New Draw</Title>
      </Layout>

      <Layout
        fullWidth
        flex
        mt="48px"
        style={{ justifyContent: "space-between" }}
      >
        <Layout width="48%">
          <InputField value={values.symbol} onChange={handleChange} name="symbol" label="Symbol" placeholder="Ex: &" />
        </Layout>

        <Layout width="48%">
          <SelectField
            onChange={(value)=>setFieldValue('shape',value)}
            label="Shape"
            options={options}
            placeholder="Chose shape"
          />
        </Layout>
      </Layout>

      <Layout
        fullWidth
        flex
        mt="24px"
        style={{ justifyContent: "space-between" }}
      >
        <Layout width="48%">
          <InputField value={values.color} onChange={handleChange} name="color" label="Color" placeholder="Ex: #111111" />
        </Layout>

        <Layout width="48%">
          <InputField
            value={values.measurement}
            onChange={handleChange}
            name="measurement"
            label="Measurement"
            placeholder="Ex: 7"
          />
        </Layout>
      </Layout>

      <Layout mt="24px">
        <ContainedButton
          style={{ paddingLeft: "50px", paddingRight: "50px" }}
          text="Draw"
          onClick={handleSubmit}
        />
      </Layout>
    </Wrapper>
  )
}

export default Input
