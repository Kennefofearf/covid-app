import React from 'react'
import styles from './dropdown.module.css'

export default function Dropdown(props) {
    const { data, setSelected, setOpen } = props
    const regions = data.data.map(region => region.name)
    console.log(regions)
  return (
    <div className={styles.dropdown}>
        {['Global', ...regions].map((regionName, index) => {
            return <div key={index} className={styles.dropdownItem} 
            onClick={() => {
                setSelected(regionName)
                setOpen(false)
                }} >
                {regionName}
            </div>
        })}
    </div>
  )
}
