import { createContext, useState, useEffect } from "react";
import run from "../../config/Gemini";

// Create the context
export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]); // Changed from prevPrompt to prevPrompts (array)
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  // Define the function to send prompt
  const onSent = async (prompt) => {
    setResultData('');
    setLoading(true);
    setShowResult(true);
    
    // Use the prompt parameter instead of input in case it's called from Sidebar
    const currentPrompt = prompt || input;
    setRecentPrompt(currentPrompt);
    
    // Add to previous prompts if it's not empty
    if (currentPrompt.trim()) {
      setPrevPrompts(prev => [currentPrompt, ...prev].slice(0, 10)); // Keep last 10 prompts
    }
    
    const response = await run(currentPrompt);
    setResultData(response);
    setLoading(false);
    setInput("");
  };

  // Context value to pass down
  const contextValue = {
    prevPrompts, // Changed from prevPrompt
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;