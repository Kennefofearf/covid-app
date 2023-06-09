import React from 'react'
import styles from './navbar.module.css'
import { url } from './Dropdown'

export default function Navbar(props) {
  const {
    selected, 
    open, 
    setOpen,
    loading,
    error
  } = props

  /* Catches an error if there is one */

  if (error) {
    return <div>
      ERROR
    </div>
  }

  return (
    <div className={styles.navbar} onClick={() => setOpen(!open)}>
      {console.log(url)}
      {loading ?

        /* Displays as "loading" while data is fetched */

      <div>Loading</div> :
      <div className={styles.subText}>{selected}</div>
      }
      <i style={{transform: `${open ? 'rotate(180deg)' : ''}`, transitionDuration: '300ms'}} className="fa-solid fa-chevron-down"></i>
    </div>
  )
}
