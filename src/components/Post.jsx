import React, { useContext } from 'react'
import {PostList} from '../store/post-list-store'

function Post({post}) {
  const {deletePost} = useContext(PostList);
  return (
    <article className="max-sm:max-w-[85%] relative m-auto mt-6 rounded-xl border-2 border-gray-100 bg-white max-w-sm ">
    <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
      <div>
        <h3 className="font-medium sm:text-lg ">
          <a href="#" className="hover:underline"> {post.title}<span className="absolute top-0.5 right-0.5 grid min-h-[24px] min-w-[24px] translate-x-2/4 -translate-y-2/4 place-items-center rounded-full bg-violet-500 py-1 px-1 text-xs text-white">
          ❤️{post.reactions}
          </span> </a>
        </h3>
  
        <p className="line-clamp-2 text-sm text-gray-700">
          {post.body}
        </p>
  
        <div className="mt-2 sm:flex sm:items-center sm:gap-2">
           
          <p className="hidden sm:block sm:text-xs sm:text-gray-500">
            Posted by
            <a href="#" className="font-medium underline hover:text-gray-700"> {post.userId} </a>
          </p>
         
        </div>
        <div className='flex flex-wrap mt-3'>
            {post.tags.map((tag) => 
              <span key={tag} className="mr-1.5 mb-1.5 whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
              {tag}
            </span>
            )}
          </div>
          
      </div>
    </div>


    <div className="flex justify-end ">
      <strong
        className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-red-600 px-3 py-1.5 text-white"
      >
        <span  onClick={() => {
          deletePost(post.id);
          }} className="cursor-pointer text-[12px] font-medium sm:text-xs">Delete</span>
      </strong>
    </div>
  </article>
  )
}

export default Post