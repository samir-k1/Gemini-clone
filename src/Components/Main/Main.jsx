import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
const Main = () => {
  return (
<div className="main">
    <div className="nav"> 
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" className="profile" />
    </div>

    <div className="main-container">
        <div className="greet">
            <p> <span> Hello,Dev.</span></p>
            <p>How can i Help you today?</p>
        </div>
        <div className="cards">
            <div className="card">
               <p>Suggest beautiful places  on an up coming roap trip</p> 
               <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
               <p>Suggest beautiful places  on an up coming roap trip</p> 
               <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
               <p>Suggest beautiful places  on an up coming roap trip</p> 
               <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
               <p>Suggest beautiful places  on an up coming roap trip</p> 
               <img src={assets.code_icon } alt="" />
            </div>

        </div>
    </div>
    <div className="main-bottom">
        <div className="search-box">
            <input type="text" placeholder='Enter your Prompt Here' />
            <div className='bottom-img'>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img src={assets.send_icon} alt="" />



            </div>
        </div>
        <p className="bottom-info">Gemini is not 100 % accurate it can provide the wrong data so please recheck it whenever you are in doubt</p>
    </div>
</div>
  )
}

export default Main
