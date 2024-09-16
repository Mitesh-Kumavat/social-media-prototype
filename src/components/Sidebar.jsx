import React from 'react'

function Sidebar({selectedTab , setSelectedTab }) {

  const handleOnClick = (TabName) => {
    setSelectedTab(TabName);
  }

  return (
    <div className=" max-sm:hidden min-w-60 flex h-screen flex-col justify-between border-e bg-white">
    <div className="px-4 py-6">
      <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
        Mitesh
      </span>
  
      <ul className="mt-6 space-y-1">
        <li onClick={() =>{ handleOnClick("Home")}}>
          <a 
            href="#"
            className={` block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 ${selectedTab === 'Home' && "bg-gray-500 text-white"} `}
          >
            Home
          </a>
        </li>
  
        <li onClick={() =>{ handleOnClick("Post")}} >
          <a 
            href="#"
            className={` ${selectedTab === 'Post' && "bg-gray-500 text-white"} block rounded-lg  px-4 py-2 text-sm font-medium text-gray-500 `}
          >
           Create Post
          </a>
        </li>
      </ul>
    </div>
  
    <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
      <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="size-10 rounded-full object-cover"
        />
  
        <div>
          <p className="text-xs">
            <strong className="block font-medium">Mitesh Kumavat</strong>
  
            <span> mitesh@gmail.com </span>
          </p>
        </div>
      </a>
    </div>
  </div>
  )
}

export default Sidebar