import React from 'react'
import { useFetchData } from '../hooks/fetchData'
import Dropdown from './Dropdown'
import { iso } from './Dropdown'

export default function Main(props) {
    const { selected } = props
    const url = 'https://covid-api.com/api/reports/total?date=2020-03-14&iiso=USA'
    const selectedRegion = iso
    const date = new Date()
    let year = date.getFullYear()
    let month = ('0' + (date.getMonth() + 1 - 1)).slice(-2)
    var day = ('0' + (date.getDate())).slice(-2)
    if (month == '02' && day > 28) {
        day = 28
    }
    const new_Url = `https://covid-api.com/api/reports/total?date=${year}-${month}-${day}&iso=${selectedRegion}`
    const { data, loading, error } = useFetchData(new_Url)
    // const deaths = data.data.map(death => death.deaths)
    // const cases = data.data.map(confirmed => confirmed.confirmed)
    console.log(data)

    if (selected === 'Global') {
        //selectedRegion = 'USA'
        return <div>
            Globobble
        </div>
    }
  return (
    <div>Main</div>
  )
}
