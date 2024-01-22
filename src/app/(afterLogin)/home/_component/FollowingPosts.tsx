'use client'

import { useQuery } from '@tanstack/react-query'
import { getFollowingPosts } from '../_lib/getFollowingPost'
import Post from '../../_component/Post'
import {Post as IPost} from '@/model/Posts'

export default function FollowingPosts() {
  const { data } = useQuery<IPost[]>({
    queryKey: ['posts', 'followings'],
    queryFn: getFollowingPosts,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  })
  return data?.map((post) => {
    <Post post={post} key={post.postId} />
  })
}
