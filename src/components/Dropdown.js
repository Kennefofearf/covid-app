import React from 'react'
import styles from './dropdown.module.css'

const date = new Date()
let year = date.getFullYear()
let month = ('0' + (date.getMonth() + 1 - 2)).slice(-2)
var day = ('0' + (date.getDate())).slice(-2)
  if (month == '02' && day > 28) {
      day = 28
  }
export var url = 'https://covid-api.com/api/regions?per_page=1000'
export var iso
var regions

export default function Dropdown(props) {
    const { data, setSelected, setOpen } = props

    if (url === 'https://covid-api.com/api/regions?per_page=1000') {
      regions = data.data.map(region => region.name)
      console.log(data)
    }

  return (
    <div className={styles.dropdown}>
        {['Global', ...regions].map((regionName, index) => {
            return <div key={index} className={styles.dropdownItem}
            onClick={() => {
                setSelected(regionName)
                setOpen(false)
                iso = data.data[index -1].iso
                url = `https://covid-api.com/api/reports/total?date=${year}-${month}-${day}&iso=${iso}`
                }} >
                {regionName}
            </div>
        })}
    </div>
  )
}
