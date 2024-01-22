import style from './home.module.css'
import Tab from './_component/Tab'
import PostForm from './_component/PostForm'
import PostRecommends from './_component/PostRecommends'
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query'
import { getPostRecommends } from './_lib/getPostRecommends'

export default async function Home() {
  const queryClient = new QueryClient()
  // post, recommend를 가지고 있는 키는 항상 getPostRecommends을 실행해라.
  await queryClient.prefetchQuery({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
  })
  // 위에서 받아온 데이터를 어떻게 읽을 수 있냐면
  queryClient.getQueryData(['posts', 'recommends'])
  // hydrated란 서버에서 받아온 데이터를 클라이언트에서 그대로 형식 맞춰서 물려받음
  const dehydratedState = dehydrate(queryClient)
  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <Tab />
        <PostForm />
        <PostRecommends />
      </HydrationBoundary>
    </main>
  )
}
