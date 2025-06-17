import React, { useState } from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/Main/Main';
import './App.css';

function App() {
  const [sidebarExtended, setSidebarExtended] = useState(true);

  return (
    <div className="App">
      <Sidebar extended={sidebarExtended} setExtended={setSidebarExtended} />
      <Main sidebarExtended={sidebarExtended} />
    </div>
  );
}

export default App;