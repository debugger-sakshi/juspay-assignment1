import React from 'react'
import HistogramChart from './HistogramChart'
import ArrowRise from '../../assets/images/ArrowRise.png';
import TotalSales from './TotalSales';

import LinesChart from './LinesChart';
import Main from './Main';
import RevenueByLocation from './RevenueByLocation';
import RightSidebar from './RightSidebar';
import World from '../../assets/images/world.svg'
import { useState } from 'react';
import Orderlist from './Orderlist';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useRef } from 'react';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/all';
const EcomerceData = () => {
  const color = [
    "var(--color-black)",
    "var(--secondary-cyan)"
  ]
  const [active, setActive] = useState(0)
  const [showNotification, setShowNotification] = useState(false)
  const handlerNotification = (val) => {
    // console.log("called")
    setShowNotification(val)
  }
  const rightBarRef = useRef()
  const orderRef = useRef()
  const mainRef = useRef()
  const orderMainRef = useRef()
  const orderMainRef1 = useRef()
  const orderMainRef2 = useRef()
  const totalSaleRef = useRef()

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(mainRef.current, {
      y: 300,

      opacity: 0,
      delay: 0.4,

    })
    gsap.from(totalSaleRef.current, {
      

      // opacity: 0,
      delay: 1,
      duration:1,
      rotate:'180',
      scrollTrigger:{
        trigger:"#totalSaleRef",
        scroll:".content",
        // markers:true,
        start:'top 80%'
      }
  
    })
  }, [])

  
  useGSAP(() => {
    gsap.from(orderMainRef1.current, {
      // x:300,

      opacity: 0,
      delay: 1.2,
      duration: 1,

      ease: "sine.out",

    })
    gsap.from(orderRef.current, {
      opacity: 0,
      delay: 1,
      duration: 1,
  
      ease: "sine.out",
    })
    gsap.from(orderMainRef.current, {
      // x:300,

      opacity: 0,
      delay: 0.8,
      duration: 1,

      ease: "sine.out",

    })
    gsap.from(orderMainRef2.current, {
      // x:300,
  
      opacity: 0,
      delay: 1.4,
      duration: 1,
  
      ease: "sine.out",
  
    })
  }, [])

  useGSAP(() => {
   
  }, [])
  
  useGSAP(() => {
    gsap.from(rightBarRef.current, {
      x: 300,
      opacity: 0,
      delay: 0.5,
      duration: 0.5
    })

  }, [])
  const { contextSafe } = useGSAP()
  const handleOrder = contextSafe(() => {

    // gsap.from(orderRef.current,{
    //   // x:300,
    //   y:500,
    //   delay:1,
    //   duration:1
    // })
    gsap.to(rightBarRef.current, {
      x: 320,
      // y:200,
      // delay:0.5,
      duration: 0.5,
      // ease:"sine.out",
      display: 'none',
    })
    gsap.from(mainRef.current, {
      y: 600,
      x: 500,
      opacity: 0,
      delay: 0.5,
      duration: 1.5,


    })
  })
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <>
      <Main setShowNotification={handlerNotification} mainRef={mainRef} width={active == 0 ? 'ecm-width' : 'order-width'}>
        {
          active == 0 ?
            <>
              <h6 className=' mb-4'>eCommerce</h6>
              <div className='d-flex flex-wrap' >
                <div className=' orders d-flex flex-wrap'  >
                  <div className='first dark-text' ref={orderMainRef}>
                    <span>Customers</span>
                    <div className='d-flex mt-2 justify-content-between' >
                      <h6>3,732</h6>
                      <div>
                        <span className='f-12'>+11.0% </span>
                        <img className='icon-16' src={ArrowRise} alt="arrowrise" />
                      </div>
                    </div>
                  </div>
                  <div
                    ref={orderRef}
                    className='second pointer' onClick={() => {
                      handleOrder()
                      setActive(1)
                    }}>
                    <span>Orders</span>
                    <div className='d-flex mt-2 justify-content-between' >
                      <h6>3,732</h6>
                      <div>
                        <span className='f-12'>+11.0% </span>
                        {/* <img className='icon-16' src={ArrowRise} alt ="arrowrise" /> */}
                        <span className='icon-16'>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.45488 5.60777L14 4L12.6198 9.6061L10.898 7.9532L8.12069 10.8463C8.02641 10.9445 7.89615 11 7.76 11C7.62385 11 7.49359 10.9445 7.39931 10.8463L5.36 8.72199L2.36069 11.8463C2.16946 12.0455 1.85294 12.0519 1.65373 11.8607C1.45453 11.6695 1.44807 11.3529 1.63931 11.1537L4.99931 7.65373C5.09359 7.55552 5.22385 7.5 5.36 7.5C5.49615 7.5 5.62641 7.55552 5.72069 7.65373L7.76 9.77801L10.1766 7.26067L8.45488 5.60777Z" fill="var(--color-black)" />
                          </svg>

                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='third' ref={orderMainRef1}>
                    <span>Revenue</span>
                    <div className='d-flex mt-2 justify-content-between' >
                      <h6>$732</h6>
                      <div>
                        <span className='f-12'>-03.0% </span>
                        {/* <img className='icon-16' src={ArrowFall} alt ="ArrowFall" /> */}
                        <span className='icon-16'>
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3463 3.63931C14.5455 3.83054 14.5519 4.14706 14.3607 4.34627L11.0007 7.84627C10.9064 7.94448 10.7761 8 10.64 8C10.5039 8 10.3736 7.94448 10.2793 7.84627L8.24 5.72199L5.82335 8.23933L7.54513 9.89223L2 11.5L3.38019 5.8939L5.10197 7.5468L7.87931 4.65373C7.97359 4.55552 8.10385 4.5 8.24 4.5C8.37615 4.5 8.50641 4.55552 8.60069 4.65373L10.64 6.77801L13.6393 3.65373C13.8305 3.45453 14.1471 3.44807 14.3463 3.63931Z" fill="var(--color-black)" />
                          </svg>

                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='fourth dark-text' ref={orderMainRef2}>
                    <span>Growth</span>
                    <div className='d-flex mt-2 justify-content-between' >
                      <h6>69%</h6>
                      <div>
                        <span className='f-12'>+11.0% </span>
                        <img className='icon-16' src={ArrowRise} alt="arrowrise" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='projections' >
                  <h6 className='p-4'> Projections Vs Actuals</h6>
                  <div className='px-4'>
                    <HistogramChart />
                  </div>
                </div>
                <div className='revenue mt-4 me-4' >
                  <div className='d-flex align-items-center px-3 py-2'>
                    <div className='f-14 revenue-border mb-1'>Revenue</div>
                    <div>
                      <ul className='d-flex py-0  ps-3 mb-1 sale-list'>
                        <li className='f-14 me-4' style={{ fontWeight: 400, "--bullet-color": color[0], lineHeight: '1.6' }}>
                          Current week <span className='f-14' style={{ fontWeight: 600 }}>$58,211</span>
                        </li>
                        <li className='f-14' style={{ fontWeight: 400, "--bullet-color": color[1], lineHeight: '1.6' }} >
                          Previous week <span className='f-14' style={{ fontWeight: 600 }}>$68,111</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <LinesChart />
                </div>
                <div className='revenue-by-location mt-4 p-4'>
                  {/* <RevenueByLocation /> */}
                  <img className='world-data' src={World} />
                  <div id="totalSaleRef">
                    <RevenueByLocation />
                  </div>
                </div>
                <div className='revenue mt-4 me-4' >
                  <h6 className='f-14'>Top Selling Products</h6>
                  <div className='d-flex top-selling'>
                    <div className='first f-12'> Name</div>
                    <div className='second f-12'>Price</div>
                    <div className='third f-12'>Quantity</div>
                    <div className='fourth f-12'>Amount</div>
                  </div>
                  <div className='d-flex top-selling top-selling-row'>
                    <div className='first f-12'> Name</div>
                    <div className='second f-12'>Price</div>
                    <div className='third f-12'>Quantity</div>
                    <div className='fourth f-12'>Amount</div>
                  </div>
                  <div className='d-flex top-selling top-selling-row'>
                    <div className='first f-12'> Name</div>
                    <div className='second f-12'>Price</div>
                    <div className='third f-12'>Quantity</div>
                    <div className='fourth f-12'>Amount</div>
                  </div>
                  <div className='d-flex top-selling top-selling-row'>
                    <div className='first f-12'> Name</div>
                    <div className='second f-12'>Price</div>
                    <div className='third f-12'>Quantity</div>
                    <div className='fourth f-12'>Amount</div>
                  </div>
                  <div className='d-flex top-selling top-selling-row'>
                    <div className='first f-12'> Name</div>
                    <div className='second f-12'>Price</div>
                    <div className='third f-12'>Quantity</div>
                    <div className='fourth f-12'>Amount</div>
                  </div>
                  <div className='d-flex top-selling top-selling-row'>
                    <div className='first f-12'> Name</div>
                    <div className='second f-12'>Price</div>
                    <div className='third f-12'>Quantity</div>
                    <div className='fourth f-12'>Amount</div>
                  </div>
                </div>
                <div className='revenue-by-location mt-4' >
                  <TotalSales totalSaleRef={totalSaleRef}/>
                </div>
              </div>

            </>
            :
            <Orderlist width={'86%'} />
        }
      </Main>
      <RightSidebar rightBarRef={rightBarRef} show={showNotification} setShowNotification={showNotification && setShowNotification} />
    </>

  )
}

export default EcomerceData
