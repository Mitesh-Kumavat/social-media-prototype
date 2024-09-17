import PostListProvider from './store/post-list-store'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Outlet } from 'react-router-dom'

function App() {

  const [selectedTab, setSelectedTab] = useState('Home');
  return (
    <PostListProvider >
        <div className='flex'>
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <div className="w-full">
          <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab}  />
          <Outlet/>
          </div>
        </div>
     </PostListProvider>
  )
}

export default App
