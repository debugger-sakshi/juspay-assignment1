import React from 'react'
import LeftSidebar from './LeftSidebar'
import { Outlet } from 'react-router'

const Home = () => {
  return (
    <div className='content d-flex'>
      <LeftSidebar />
        <Outlet />
     
      {/* <Orderlist width={"86%"} /> */}
    </div>
  )
}

export default Home
