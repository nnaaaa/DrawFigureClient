import { faPen } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { useRouter } from "next/router"
import {
  ContainedButton,
  Layout,
  Table,
  Title,
  Wrapper,
} from "../../components"
import styles from "./styles.module.css"

export default function List() {
  const router = useRouter()
  const data = [
    {
      id: "1234",
      symbol: "&",
      shape: "rectangle",
      color: "red",
      measurement: "4",
    },
  ]

  return (
    <Wrapper width="770px" height="90vh">
      <Layout
        flex
        style={{ justifyContent: "space-between", alignItems: "center" }}
        fullWidth
      >
        <Title>Your Draws</Title>
        <Link href="/input">
          <ContainedButton startIcon={faPen} text="Create" />
        </Link>
      </Layout>

      <Layout mt="40px" fullWidth>
        {!data || data.length === 0 ? (
          <p className={styles.emptyNotifier}>Your list is empty</p>
        ) : (
            <Table data={data} onRowClick={(row)=>router.push({pathname:`/edit/${row.id}`,query:row})} />
        )}
      </Layout>
    </Wrapper>
  )
}
