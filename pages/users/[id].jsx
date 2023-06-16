import { useRouter } from "next/router"

export default function UserDetail() {
  const router = useRouter()
  const { id } = router.query

  return <h1>User Detail {id}</h1>
}
