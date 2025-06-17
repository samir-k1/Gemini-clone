import React, { useContext } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { Context } from '../../Context/Context';

const Sidebar = ({ extended, setExtended }) => {
    const {
        onSent,
        prevPrompts = [],
        setShowResult,
        setResultData,
        setInput,
        setRecentPrompt
    } = useContext(Context);

    const handleNewChat = () => {
        setShowResult(false);
        setResultData('');
        setInput('');
        setRecentPrompt('');
    };

    const loadPrompt = (prompt) => {
        onSent(prompt);
    };

    return (
        <div className={`sidebar ${extended ? 'extended' : ''}`}>
            <div className="top">
                <div className="menu-toggle" onClick={() => setExtended(!extended)}>
                    <img src={assets.menu_icon} alt="menu" className="menu-icon" />
                </div>

                <div className="new-chat" onClick={handleNewChat}>
                    <img src={assets.plus_icon} alt="New chat" className="add-icon" />
                    <p>New chat</p>
                </div>

                <div className="recent">
                    <p className="recent-title">Recent</p>
                    <div className="recent-entries">
                        {prevPrompts.length > 0 ? (
                            prevPrompts.map((prompt, index) => (
                                <div
                                    key={index}
                                    className="recent-entry"
                                    onClick={() => loadPrompt(prompt)}
                                >
                                    <img src={assets.message_icon} alt="Prompt" />
                                    <p>{prompt.length > 20 ? `${prompt.substring(0, 20)}...` : prompt}</p>
                                </div>
                            ))
                        ) : (
                            <p className="no-recent">No recent chats</p>
                        )}
                    </div>
                </div>
            </div>

            <div className="bottom">
                <div className="bottom-item">
                    <img src={assets.question_icon} alt="Help" />
                    <p>Help</p>
                </div>
                <div className="bottom-item">
                    <img src={assets.history_icon} alt="Activity" />
                    <p>Activity</p>
                </div>
                <div className="bottom-item">
                    <img src={assets.setting_icon} alt="Settings" />
                    <p>Settings</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;