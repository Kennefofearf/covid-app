import React from 'react'
import styles from './navbar.module.css'
import { useFetchData } from "../hooks/fetchData";

export default function Navbar(props) {
  const {selected, setSelected} = props
  const countriesUrl = 'https://covid-api.mmediagroup.fr/v1/cases'
  const { data, loading, error } = useFetchData(countriesUrl)

  if (error) {
    return <div>
      YOU DID SOMETHING WRONG
    </div>
  }

  return (
    <div className='styles.navbar'>
      {loading ?
      <div>Loading</div> :
      <div>{selected}</div>
      }
    </div>
  )
}
