import { useContext } from 'react';
import React from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../Context/Context';

const Main = ({ sidebarExtended }) => {
    const { onSent, showResult, loading, recentPrompt, resultData, setInput, input } = useContext(Context);

    // Function to format the response text
    const formatResponse = (text) => {
        if (!text) return '';
        
        // Split by double newlines to preserve natural paragraphs
        return text.split('\n\n').map((paragraph, index) => (
            <React.Fragment key={index}>
                {paragraph}
                <br /><br />
            </React.Fragment>
        ));
    };

    // Handle card clicks
    const handleCardClick = (prompt) => {
        setInput(prompt);
        onSent(prompt);
    };

    // Handle enter key press
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && input.trim()) {
            onSent(input);
        }
    };

    return (
        <div className={`main ${sidebarExtended ? 'sidebar-extended' : 'sidebar-collapsed'}`}>
            <div className="nav">
                <p className="logo">Gemini</p>
                <img src={assets.user_icon} alt="User profile" className="profile" />
            </div>

            <div className="main-container">
                {!showResult && !loading ? (
                    <>
                        <div className="greet">
                            <p><span>Hello, Dev.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card" onClick={() => handleCardClick("Suggest beautiful places for an upcoming road trip")}>
                                <p>Suggest beautiful places for an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="Compass icon" />
                            </div>
                            <div className="card" onClick={() => handleCardClick("Brainstorm ideas for a unique startup concept")}>
                                <p>Brainstorm ideas for a unique startup concept</p>
                                <img src={assets.bulb_icon} alt="Bulb icon" />
                            </div>
                            <div className="card" onClick={() => handleCardClick("Explain quantum computing in simple terms")}>
                                <p>Explain quantum computing in simple terms</p>
                                <img src={assets.message_icon} alt="Message icon" />
                            </div>
                            <div className="card" onClick={() => handleCardClick("Write a Python script for data analysis")}>
                                <p>Write a Python script for data analysis</p>
                                <img src={assets.code_icon} alt="Code icon" />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="result">
                        {loading ? (
                            <div className="loader-container">
                                <div className="typing-indicator">
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                    <div className="dot"></div>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="result-title">
                                    <img src={assets.user_icon} alt="User" className="result-user-icon" />
                                    <p className="result-prompt">{recentPrompt}</p>
                                </div>
                                <div className="result-data">
                                    <img src={assets.gemini_icon} alt="Gemini" className="result-gemini-icon" />
                                    <div className="result-content">
                                        {formatResponse(resultData)}
                                    </div>
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
                        placeholder='Enter a prompt here'
                        onKeyPress={handleKeyPress}
                    />
                    <div className='bottom-icons'>
                        <img src={assets.gallery_icon} alt="Upload" title="Upload image" />
                        <img src={assets.mic_icon} alt="Voice input" title="Voice input" />
                        {input && <img 
                            onClick={() => onSent(input)} 
                            src={assets.send_icon} 
                            alt="Send" 
                            className="send-icon"
                            title="Send message"
                        />}
                    </div>
                </div>
                <p className="bottom-info">
                    Gemini may display inaccurate info, including about people, so double-check its responses.
                </p>
            </div>
        </div>
    );
};

export default Main;