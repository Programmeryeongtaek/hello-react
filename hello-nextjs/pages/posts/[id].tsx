import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter()

  const { data, isLoading } = useQuery({
    queryKey: ['posts', router.query.id],
    queryFn: ([, id]) => fetch(`/api/posts/${id}`).then(res => res.json())
  })

  if (isLoading) return <>Loading...</>
  return <main>{data.title}</main>
}
