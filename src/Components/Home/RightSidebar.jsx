import React from 'react'
import Bug from '../../assets/images/BugBeetle.png'
import User from '../../assets/images/User.png'
import Wifi from '../../assets/images/Wifi.png'
import Men from '../../assets/images/Men.png'
import Women from '../../assets/images/Women.png'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { useRef } from 'react'
const RightSidebar = ({show,setShowNotification,rightBarRef}) => {
 
  return (
    <div ref={rightBarRef} className={`${show == true ? "showNotification" : ""} `} onClick={()=> {
      if(setShowNotification){
        setShowNotification(false)
      }
    }}>
      <div  className={`rightBar ${show == true ? "show" : ""}`}>
      <div>
        <div className='notifiction'>Notifications</div>
        <div className='mt-4'>
          <div className='d-flex'>
          <div className='notify-box me-2'>
                    <img className='icon-16' src={Bug} alt="img" />
          </div>
          <div className='notify-text'>
            <p className='mb-0'> You have a bug that needs to be fixed.</p>
            <p className='mb-0 text-grey'>Just Now</p>
          </div>
          </div>
        </div>
        <div className='mt-4'>
          <div className='d-flex'>
          <div className='notify-box me-2'>
                    <img className='icon-16' src={User} alt="img" />
          </div>
          <div className='notify-text'>
            <p className='mb-0'> New user registered</p>
            <p className='mb-0 text-grey'>59 minutes</p>
          </div>
          </div>
        </div>
        <div className='mt-4'>
          <div className='d-flex'>
          <div className='notify-box me-2'>
                    <img className='icon-16' src={Bug} alt="img" />
          </div>
          <div className='notify-text'>
            <p className='mb-0'> You have a bug that needs to be fixed.</p>
            <p className='mb-0 text-grey'>12 hours ago</p>
          </div>
          </div>
        </div>
        <div className='mt-4'>
          <div className='d-flex'>
          <div className='notify-box me-2'>
                    <img className='icon-16' src={Wifi} alt="img" />
          </div>
          <div className='notify-text'>
            <p className='mb-0'> Andi Lane subscribed to you.</p>
            <p className='mb-0 text-grey'>Today 11:59 am</p>
          </div>
          </div>
        </div>
      </div>
      <div className='mt-4'> 
        <div className='notifiction'>Activities</div>
        <div className='mt-4'>
          <div className='d-flex'>
          <div className='notify-box me-2' style={{borderRadius:'50%'}}>
                    <img className='' src={Men} alt="img" />
          </div>
          <div className='notify-text'>
            <p className='mb-0'> You have a bug that needs to be fixed.</p>
            <p className='mb-0 text-grey'>Just Now</p>
          </div>
          </div>
        </div>
        <div className='mt-4'>
          <div className='d-flex'>
          <div className='notify-box me-2' style={{borderRadius:'50%'}}>
                    <img className='' src={Women} alt="img" />
          </div>
          <div className='notify-text'>
            <p className='mb-0'> New user registered</p>
            <p className='mb-0 text-grey'>59 minutes</p>
          </div>
          </div>
        </div>
        <div className='mt-4'>
          <div className='d-flex'>
          <div className='notify-box me-2' style={{borderRadius:'50%'}}>
                    <img className='' src={Men} alt="img" />
          </div>
          <div className='notify-text'>
            <p className='mb-0'> You have a bug that needs to be fixed.</p>
            <p className='mb-0 text-grey'>12 hours ago</p>
          </div>
          </div>
        </div>
        <div className='mt-4'>
          <div className='d-flex'>
          <div className='notify-box me-2' style={{borderRadius:'50%'}}>
                    <img className='' src={Women} alt="img" />
          </div>
          <div className='notify-text'>
            <p className='mb-0'> Andi Lane subscribed to you.</p>
            <p className='mb-0 text-grey'>Today 11:59 am</p>
          </div>
          </div>
        </div>
      </div>
      <div className='mt-4'> 
        <div className='notifiction'>Contacts</div>
        <div className='mt-4'>
          <div className='d-flex'>
          <div className='notify-box me-2' style={{borderRadius:'50%'}}>
                    <img className='' src={Men} alt="img" />
          </div>
          <div className='notify-text'>
            <span className='mb-0 f-14'> Natali Craig</span>
            
          </div>
          </div>
        </div>
        <div className='mt-4'>
          <div className='d-flex'>
          <div className='notify-box me-2' style={{borderRadius:'50%'}}>
                    <img className='' src={Women} alt="img" />
          </div>
          <div className='notify-text'>
            <span className='mb-0 f-14'> Drew Cano</span>
            
          </div>
          </div>
        </div>
        <div className='mt-4'>
          <div className='d-flex'>
          <div className='notify-box me-2' style={{borderRadius:'50%'}}>
                    <img className='' src={Men} alt="img" />
          </div>
          <div className='notify-text'>
            <span className='mb-0 f-14'> Orlando Drags</span>
            
          </div>
          </div>
        </div>
        <div className='mt-4'>
          <div className='d-flex'>
          <div className='notify-box me-2' style={{borderRadius:'50%'}}>
                    <img className='' src={Women} alt="img" />
          </div>
          <div className='notify-text'>
            <span className='mb-0 f-14'> Andi Lane </span>
            
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default RightSidebar
