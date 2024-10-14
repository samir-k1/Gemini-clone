import { createContext } from "react";
import run from "../../config/Gemini";
// Create the context
export const Context = createContext();

 const ContextProvider = (props) => {

  // Define the function to send prompt
  const onSent = async (prompt) => {
    await run(prompt);
  };

  // Call onSent (though it’s better not to call it directly here, but I assume you want to test)
  onSent("what is react js");

  // Context value to pass down
  const contextValue = {
    onSent,  // Make onSent available to other components
  };

  // Correct return statement using Context.Provider
  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
