import React from 'react'
import styles from './dropdown.module.css'

export var url = 'https://covid-api.com/api/regions?per_page=1000'
export var iso
var regions
var toggle = false
var dataSaver

export default function Dropdown(props) {
    const { data, setSelected, setOpen } = props

    /* Stores initial data fetch to a variable once */
    
  if (toggle === false) {
    regions = data.data.map(region => region.name)
    dataSaver = data.data
    toggle = true
  }

  return (
    <div className={styles.dropdown}>
        {['Global',...regions].map((regionName, index) => {
            return <div key={index} className={styles.dropdownItem}
            onClick={() => {
                setSelected(regionName)
                setOpen(false)
                iso = dataSaver[index -1].iso
                url = `https://covid-api.com/api/reports/total?date=2023-03-09&iso=${iso}`
                console.log(url)
                console.log(iso) 
                }} >
                {regionName}
            </div>
        })}
    </div>
  )
}
