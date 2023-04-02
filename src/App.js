import React, {useState} from "react";
import Navbar from "./components/Navbar";
import './index.css'
import Dropdown from "./components/Dropdown";
import Main from "./components/Main";
import { useFetchData } from "./hooks/fetchData";
import { useFetchNewData } from "./hooks/fetchData";

function App() {
  const [selected, setSelected] = useState('Global')
  const [open, setOpen] = useState(false)
  const countriesUrl = 'https://covid-api.com/api/regions?per_page=1000'
  const { data, loading, error } = useFetchData(countriesUrl)
  const { newData, newLoading, newError } = useFetchNewData(countriesUrl)


  
  return (
    <div className="App">
      <Navbar selected={selected} setSelected={setSelected}  
      open={open} setOpen={setOpen} data={data} loading={loading} 
      error={error} />
      
      {!loading && <main className="Main">
        {open ?
      <Dropdown data={data} setSelected={setSelected} setOpen={ setOpen } /> :

      <Main selected={selected} newData={newData} />
        }
      </main>}
    </div>
  );
}

export default App;
