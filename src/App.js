import React, {useState} from "react";
import Navbar from "./components/Navbar";

function App() {
  const [boool, setboool] = useState(true)
  const Kenny = "Get a job!"
  return (
    <div className="App">
      {boool ? Kenny : "Bad job forever!"}
      <div onClick={() => setboool(!boool)}>
        <h1>changeBoool</h1>
      </div>
      <Navbar/>
    </div>
  );
}

export default App;
