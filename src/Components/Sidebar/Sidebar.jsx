import React, { useState } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';

const Sidebar = () => {
    const [extended, setExtended] = useState(true);

    return (
        <div className={`Sidebar ${extended ? 'extended' : ''}`}>
            <div className="top">
                <img
                    className="menu"
                    src={assets.menu_icon}
                    alt="menu"
                    onClick={() => setExtended(!extended)} // Toggle sidebar
                />
                <div className="newchat">
                    <img className='addbutton' src={assets.plus_icon} alt="" />
                    {extended && <p>New chat</p>}
                </div>

                <div className="recent">
                    {extended && <p className="recent-title">Recent</p>}
                    {extended && (
                        <div className="recent-entry">
                            <img className='image-box' src={assets.message_icon} alt="" />
                            <p>What is React?</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="help" />
                    <p>Help</p>
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="activity" />
                    <p>Activity</p>
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="settings" />
                    <p>Settings</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
