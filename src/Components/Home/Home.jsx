import React from 'react'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import Main from './Main'
import Orderlist from './Orderlist'
import EcomerceData from './EcomerceData'
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
