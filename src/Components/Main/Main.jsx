import { useContext } from 'react';
import React from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../Context/Context';

const Main = () => {
    const { onSent, showResult, loading, recentPrompt,resultData, setInput, input } = useContext(Context);

    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" className="profile" />
            </div>

            <div className="main-container">
                {/* Show card section until result is shown or input is provided */}
                {!showResult && !loading ? (
                    <>
                        <div className="greet">
                            <p><span>Hello, Dev.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest beautiful places on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Suggest beautiful places on an upcoming road trip</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Suggest beautiful places on an upcoming road trip</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Suggest beautiful places on an upcoming road trip</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="result">
                    {loading ? (
                      <div className="loader">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                      </div>
                    ) : (
                      <>
                        <div className="result-title">
                          <img src={assets.user_icon} alt="User Icon" className="result-user-icon" />
                          <p className="result-prompt">{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                          <img src={assets.gemini_icon} alt="Gemini Icon" className="result-gemini-icon" />
                          <p className='result-Data'>{resultData}</p>
                        </div>
                      </>
                    )}
                  </div>
                  

                )}
            </div>

            <div className="main-bottom">
                <div className="search-box">
                    <input
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                        type="text"
                        placeholder='Enter your Prompt Here'
                    />
                    <div className='bottom-img'>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img onClick={() => onSent(input)} src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini is not 100% accurate; it can provide the wrong data, so please recheck it whenever you're in doubt.
                </p>
            </div>
        </div>
    );
};

export default Main;
