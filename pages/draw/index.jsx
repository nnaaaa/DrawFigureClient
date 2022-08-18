import { faArrowLeftLong, faPen } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
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
  const figure = {
    symbol: "&",
    shape: "1234",
    color: "red",
    measurement: "4",
  }

  return (
    <Wrapper width="770px" height="80vh">
      <Layout fullWidth style={{ position: "relative" }}>
        <Layout
          style={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <Link href="/list">
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

      <Layout mt="48px">
        <Figure figure={figure} />
      </Layout>
    </Wrapper>
  )
}

export default Draw
