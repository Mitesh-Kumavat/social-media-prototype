import React, { useContext, useEffect, useState } from 'react'
import Post from './Post'
import { PostList as PostListData } from '../store/post-list-store'
import Spinner from './Spinner';

function PostList() {
  const { postList, addPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  const handleOnClick = () => {
    setFetching(true);
    fetch('https://dummyjson.com/posts')
      .then(res => res.json())
      .then(data => {
        addPosts(data.posts)
        setFetching(false);
      }
    );
  }

  return (
    <>
      {fetching && <Spinner />}
      {postList.length > 0 ? postList.map((post) => <Post key={post.id} post={post} />) :
        <>
          <div className='flex items-center h-3/5 justify-center text-3xl text-center font-bold'>Not posted anything yet</div>
          <button onClick={handleOnClick} className='bg-gray-700 text-white py-2 px-8 flex justify-center items-center text-center hover:bg-slate-500 rounded-md mx-auto'>Get posts</button>
        </>
      }
    </>
  )
}

export default PostList