import React, {useState} from "react";
import Navbar from "./components/Navbar";
import './index.css'
import Dropdown from "./components/Dropdown";
import Main from "./components/Main";
import { useFetchData } from "./hooks/fetchData";
import { url } from "./components/Dropdown";

function App() {
  const [selected, setSelected] = useState('Global')
  const [open, setOpen] = useState(false)
  const { data, loading, error } = useFetchData(url)
  
  return (
    <div className="App">
      <Navbar selected={selected} setSelected={setSelected}  
      open={open} setOpen={setOpen} data={data} loading={loading} 
      error={error} />
      
      {!loading && <main className="Main">
        {open ?
      <Dropdown data={data} setSelected={setSelected} setOpen={ setOpen } /> :

      <Main selected={selected} data={data} loading={loading} />
        }
      </main>}
    </div>
  );
}

export default App;
