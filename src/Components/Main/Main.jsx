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
</div>
  )
}

export default Main
