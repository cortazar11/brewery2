import React from 'react';
import PostList from './PostList';
import SideBar from './SideBar';



const Home=()=>{
  return (
          <div className="main-content-home">
            <SideBar />
            <PostList />
           </div>
      )
}

export default Home;