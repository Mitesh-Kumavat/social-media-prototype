import React, { useContext } from 'react'
import Post from './Post'
import { PostList as PostListData } from '../store/post-list-store'

function PostList() {
  const {postList} = useContext(PostListData);
  return (
    <>

    { postList.length > 0 ? postList.map((post) => <Post key={post.id} post={post}/>) : <div className='flex items-center h-3/4 justify-center text-3xl text-center font-bold'>Not posted anything yet</div>}
    </>
  )
}

export default PostList