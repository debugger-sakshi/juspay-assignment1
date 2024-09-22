import React from 'react'
import HistogramChart from './HistogramChart'
import ArrowFall from  '../../assets/images/ArrowFall.png';
import ArrowRise from  '../../assets/images/ArrowRise.png';
import TotalSales from './TotalSales';

import LinesChart from './LinesChart';
import Main from './Main';
import RevenueByLocation from './RevenueByLocation';
import RightSidebar from './RightSidebar';
import World from '../../assets/images/world.svg'
const EcomerceData = () => {
    const color = [
        "var(--color-black)",
        "var(--secondary-cyan)"
      ]
  return (
    <>
    <Main>
       <h6 className=' mb-4'>eCommerce</h6>
    <div className='d-flex flex-wrap'>
          <div className=' orders d-flex flex-wrap' style={{width:'47%'}}>
            <div className='first dark-text'>
              <span>Customers</span>
              <div className='d-flex mt-2 justify-content-between' >
                <h6>3,732</h6>
                <div>
                <span className='f-12'>+11.0% </span>
                <img className='icon-16' src={ArrowRise} alt ="arrowrise" />
                </div>
              </div>
            </div>
            <div className='second'>
            <span>Customers</span>
              <div className='d-flex mt-2 justify-content-between' >
                <h6>3,732</h6>
                <div>
                <span className='f-12'>+11.0% </span>
                <img className='icon-16' src={ArrowRise} alt ="arrowrise" />
                </div>
              </div>
            </div>
            <div className='third'>
            <span>Customers</span>
              <div className='d-flex mt-2 justify-content-between' >
                <h6>3,732</h6>
                <div>
                <span className='f-12'>+11.0% </span>
                <img className='icon-16' src={ArrowRise} alt ="arrowrise" />
                </div>
              </div>
            </div>
            <div className='fourth dark-text'>
            <span>Customers</span>
              <div className='d-flex mt-2 justify-content-between' >
                <h6>3,732</h6>
                <div>
                <span className='f-12'>+11.0% </span>
                <img className='icon-16' src={ArrowRise} alt ="arrowrise" />
                </div>
              </div>
            </div>
          </div>
          <div className='col-6 projections' style={{width:'52%'}}>
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
                  <li className='f-14 me-4' style={{fontWeight:400, "--bullet-color": color[0], lineHeight:'1.6' }}>
                    Current week <span className='f-14' style={{fontWeight:600}}>$58,211</span>
                  </li>
                  <li className='f-14' style={{fontWeight:400,  "--bullet-color": color[1] ,lineHeight:'1.6' }} >
                    Previous week <span className='f-14' style={{fontWeight:600}}>$68,111</span>
                  </li>
                </ul>
              </div>
            </div>
            <LinesChart />
          </div>
          <div className='revenue-by-location mt-4 p-4'>
              {/* <RevenueByLocation /> */}
              <img className='world-data' src={World} />
              <div>
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
          <div className='revenue-by-location mt-4'>
            <TotalSales />
          </div>
        </div>
        </Main>
        <RightSidebar />
    </>

  )
}

export default EcomerceData
