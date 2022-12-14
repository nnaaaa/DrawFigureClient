import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons"
import { useFormik } from "formik"
import Link from "next/link"
import { useRouter } from "next/router"
import { editFigure } from "../../apis/figure"
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
import { options } from "../input"

function Edit() {
  const router = useRouter()
  const { errors, values, touched, handleSubmit, handleChange, setFieldValue } =
    useFormik({
      initialValues: router.query,
      enableReinitialize: true,
      validationSchema: figureValidate,
      onSubmit: async (values, { setFieldError }) => {
        try {
          const message = await editFigure(values)
          if (message === "Success") {
            router.push({ pathname: `/draw/${values.id}`, query: values })
          }
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
          <Link href="/">
            <TextButton text="Back to list" startIcon={faArrowLeftLong} />
          </Link>
        </Layout>
        <Title>Edit Draw</Title>
      </Layout>

      <Layout flex style={{ justifyContent: "space-between" }} fullWidth>
        <Layout
          mt="48px"
          width="48%"
          flex
          style={{ flexDirection: "column", alignItems: "flex-end" }}
        >
          <Layout fullWidth>
            <InputField
              value={values.symbol}
              onChange={handleChange}
              name="symbol"
              label="Symbol"
              placeholder="Ex: &"
            />
          </Layout>

          <Layout fullWidth mt="24px">
            <InputField
              value={values.color}
              onChange={handleChange}
              name="color"
              label="Color"
              placeholder="Ex: #111111"
            />
          </Layout>

          <Layout mt="24px">
            <ContainedButton
              style={{ paddingLeft: "50px", paddingRight: "50px" }}
              onClick={() => router.back()}
              text="Cancel"
            />
          </Layout>
        </Layout>

        <Layout
          mt="48px"
          width="48%"
          flex
          style={{ flexDirection: "column", alignItems: "flex-start" }}
        >
          <Layout fullWidth>
            <SelectField
              value={values.shape}
              onChange={(value) => setFieldValue("shape", value)}
              label="Shape"
              options={options}
            />
          </Layout>

          <Layout fullWidth mt="24px">
            <InputField
              value={values.measurement}
              onChange={handleChange}
              name="measurement"
              label="Measurement"
              placeholder="Ex: 7"
            />
          </Layout>

          <Layout mt="24px">
            <ContainedButton
              style={{ paddingLeft: "50px", paddingRight: "50px" }}
              text="Save"
              onClick={handleSubmit}
            />
          </Layout>
        </Layout>
      </Layout>
    </Wrapper>
  )
}

export default Edit
