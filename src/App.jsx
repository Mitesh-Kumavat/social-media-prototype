import PostListProvider from './store/post-list-store'
import { useState } from 'react'
import Form from './components/Form'
import Navbar from './components/Navbar'
import PostList from './components/PostList'
import Sidebar from './components/Sidebar'

function App() {

  const [selectedTab, setSelectedTab] = useState('Home');
  return (
    <PostListProvider >
      
        <div className='flex'>
          <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <div className="w-full">
          <Navbar selectedTab={selectedTab} setSelectedTab={setSelectedTab}  />
          { selectedTab === 'Home' ? <PostList/> : <Form/> }
          </div>
        </div>
     </PostListProvider>
  )
}

export default App
