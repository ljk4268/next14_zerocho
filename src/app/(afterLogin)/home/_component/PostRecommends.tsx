'use client'

import { useQuery } from '@tanstack/react-query'
import { getPostRecommends } from '../_lib/getPostRecommends'
import Post from '../../_component/Post'
import {Post as IPost} from '@/model/Posts'

export default function PostRecommends() {
  const { data } = useQuery<IPost[]>({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000
  })
  return data?.map((post) => {
    <Post post={post} key={post.postId} />
  })
}
