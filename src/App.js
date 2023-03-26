import React, {useState} from "react";
import Navbar from "./components/Navbar";

function App() {
  const [selected, setSelected] = useState('Global')
  
  return (
    <div className="App">
      <Navbar selected={selected} setSelected={setSelected} />
    </div>
  );
}

export default App;
