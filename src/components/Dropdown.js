import React from 'react'
import styles from './dropdown.module.css'
import Navbar from './Navbar'
import { setOpen } from './Navbar'

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
var toggle = false
var dataSaver

export default function Dropdown(props) {
    const { data, setSelected, setOpen } = props

  if (toggle === false) {
    regions = data.data.map(region => region.name)
    dataSaver = data.data
    toggle = true
    console.log(regions)
  }
  console.log(regions)

  return (
    <div className={styles.dropdown}>
        {['Global', ...regions].map((regionName, index) => {
            return <div key={index} className={styles.dropdownItem}
            onClick={() => {
                setSelected(regionName)
                setOpen(false)
                iso = dataSaver[index -1].iso
                url = `https://covid-api.com/api/reports/total?date=${year}-${month}-${day}&iso=${iso}`
                console.log(url)
                console.log(iso) 
                }} >
                {regionName}
            </div>
        })}
    </div>
  )
}
