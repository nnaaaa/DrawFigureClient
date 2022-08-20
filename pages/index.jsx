import { faPen } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { useRouter } from "next/router"
import useSWR from "swr"
import { getProfile, getFigures } from "../apis"
import { ContainedButton, Layout, Table, Title, Wrapper } from "../components"
import styles from "./styles.module.css"
import { useEffect } from "react"

export default function List() {
  const router = useRouter()
  const { data: user } = useSWR("/auth/me", getProfile)
  const { data: figures } = useSWR("/users/figures", getFigures)

  useEffect(() => {
    if (!user) router.push("/auth/login")
  }, [user, router])

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
