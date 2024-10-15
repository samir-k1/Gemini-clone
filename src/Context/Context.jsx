import { createContext, useState, useEffect } from "react";
import run from "../../config/Gemini";

// Create the context
export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  // Define the function to send prompt
  const onSent = async (prompt) => {
    setResultData('');
    setLoading(true);
    setShowResult(true);
    setRecentPrompt(input)
    const response = await run(input);
    setResultData(response);
    setLoading(false);
    setInput("");
  };

  // Call onSent only once (e.g., on component mount)
  useEffect(() => {
    onSent("what is react js");
  }, []); // Empty dependency array ensures it only runs once

  // Context value to pass down
  const contextValue = {
    prevPrompt,
    setPrevPrompt,
    onSent, // Make onSent available to other components
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
