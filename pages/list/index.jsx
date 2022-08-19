import { faPen } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { useRouter } from "next/router"
import useSWR from "swr"
import { getProfile } from "../../apis"
import { getFigures } from "../../apis/figure"
import {
  ContainedButton,
  Layout,
  Table,
  Title,
  Wrapper,
} from "../../components"
import styles from "./styles.module.css"

export default function List() {
  const { data: user } = useSWR("/auth/me", getProfile)
  const { data: figures } = useSWR("/users/figures", getFigures)

  const router = useRouter()

  return (
    <Wrapper width="770px" minHeight="90vh">
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
        {!figures || figures.length === 0 ? (
          <p className={styles.emptyNotifier}>Your list is empty</p>
        ) : (
          <Table
            data={figures}
            onRowClick={(row) =>
              router.push({ pathname: `/draw/${row.id}`, query: row })
            }
          />
        )}
      </Layout>
    </Wrapper>
  )
}
