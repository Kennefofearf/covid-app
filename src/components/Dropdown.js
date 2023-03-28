import React from 'react'
import styles from './dropdown.module.css'

export default function Dropdown(props) {
    const { data, setSelected } = props
    const regions = data.data.map(region => region.name)
    console.log(regions)
  return (
    <div className={styles.dropdown}>
        {regions.map((regionName, index) => {
            return <div>
                {regionName}
            </div>
        })}
    </div>
  )
}
