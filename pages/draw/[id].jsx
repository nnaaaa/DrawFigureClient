import { faArrowLeftLong, faPen } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { useRouter } from "next/router"
import {
  ContainedButton,
  Figure,
  Layout,
  Table,
  TextButton,
  Title,
  Wrapper,
} from "../../components"
function Draw() {
  const { query: figure, push } = useRouter()

  return (
    <Wrapper width="770px" minHeight="90vh">
      <Layout fullWidth style={{ position: "relative" }}>
        <Layout
          style={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <Link href="/">
            <TextButton text="Back to list" startIcon={faArrowLeftLong} />
          </Link>
        </Layout>

        <Title>Your Draw</Title>

        <Layout
          style={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <Link href="/input">
            <ContainedButton startIcon={faPen} text="Create" />
          </Link>
        </Layout>
      </Layout>

      <Layout fullWidth mt="48px">
        <Table data={[figure]} />
      </Layout>

      <Layout mt="48px" style={{ color: figure.color }}>
        <Figure figure={figure} />
      </Layout>

      <Layout mt="48px">
        <ContainedButton
          style={{ paddingLeft: "50px", paddingRight: "50px" }}
          text="Edit"
          onClick={() =>
            push({ pathname: `/edit/${figure.id}`, query: figure })
          }
        />
      </Layout>
    </Wrapper>
  )
}

export default Draw
