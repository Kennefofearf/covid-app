import React, {useState} from "react";
import Navbar from "./components/Navbar";
import './index.css'
import Dropdown from "./components/Dropdown";
import Main from "./components/Main";
import { useFetchData } from "./hooks/fetchData";
import { useFetchNewData } from "./hooks/fetchData";
import { iso } from "./components/Dropdown";

function App() {
  const [selected, setSelected] = useState('Global')
  const [open, setOpen] = useState(false)
  const countriesUrl = 'https://covid-api.com/api/regions?per_page=1000'
  const { data, loading, error } = useFetchData(countriesUrl)
  var selectedISO = iso
  const date = new Date()
  let year = date.getFullYear()
  let month = ('0' + (date.getMonth() + 1 - 1)).slice(-2)
  var day = ('0' + (date.getDate())).slice(-2)
    if (month == '02' && day > 28) {
        day = 28
    }
  const old_Url = 'https://covid-api.com/api/reports/total?date=2020-03-14&iiso=USA'
  const new_Url = `https://covid-api.com/api/reports/total?date=${year}-${month}-${day}&iso=${selectedISO}`
  const { newData, newLoading, newError } = useFetchNewData(new_Url)

  
  return (
    <div className="App">
      <Navbar selected={selected} setSelected={setSelected}  
      open={open} setOpen={setOpen} data={data} loading={loading} 
      error={error} newLoading={newLoading} newError={newError}/>
      
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
