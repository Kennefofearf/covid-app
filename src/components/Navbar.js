import React from 'react'
import styles from './navbar.module.css'
import { useFetchData } from "../hooks/fetchData";

export default function Navbar(props) {
  const countriesUrl = 'https://covid-api.mmediagroup.fr/v1/cases'
  const { data, loading, error } = useFetchData(countriesUrl)
  console.log(data, loading, error)

  if (error) {
    return <div>
      YOU DID SOMETHING WRONG
    </div>
  }

  return (
    <div>
      {loading ?
      <div>Loading</div> :
      <div>data</div>
      }
    </div>
  )
}
