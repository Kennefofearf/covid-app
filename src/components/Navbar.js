import React, { useState } from 'react'
import styles from './navbar.module.css'
import { useFetchData } from "../hooks/fetchData";

export default function Navbar(props) {
  const {selected, setSelected} = props
  const countriesUrl = 'https://covid-api.com/api/regions?per_page=20'
  const { data, loading, error } = useFetchData(countriesUrl)

  const [open, setOpen] = useState(false)

  if (error) {
    return <div>
      ERROR
    </div>
  }

  return (
    <div className={styles.navbar} onClick={() => setOpen(!open)}>
      {loading ?
      <div>Loading</div> :
      <div>{selected}</div>
      }
      <i style={{transform: `${open ? 'rotate(180deg)' : ''}`, transitionDuration: '300ms'}} className="fa-solid fa-chevron-down"></i>
    </div>
  )
}
