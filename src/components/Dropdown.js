import React from 'react'
import styles from './dropdown.module.css'

export var iso

export default function Dropdown(props) {
    const { data, setSelected, setOpen } = props
    const regions = data.data.map(region => region.name)

  return (
    <div className={styles.dropdown}>
        {['Global', ...regions].map((regionName, index) => {
            return <div key={index} className={styles.dropdownItem} 
            onClick={() => {
              console.log("Data fetched...")
              console.log(data)
                setSelected(regionName)
                iso = data.data[index -1].iso
                setOpen(false)
                }} >
                {regionName}
            </div>
        })}
    </div>
  )
}
