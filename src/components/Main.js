import React from 'react'
import { useFetchData } from '../hooks/fetchData'
import Dropdown from './Dropdown'

export default function Main(props) {
    const { selected } = props
    const url = 'https://covid-api.com/api/reports/total?date=2020-03-14&iiso=USA'
    const selectedRegion = { selected }
    const date = new Date()
    let year = date.getFullYear()
    let month = ('0' + (date.getMonth() + 1)).slice(-2)
    let day = ('0' + (date.getDate())).slice(-2)
    const new_Url = `https://covid-api.com/api/reports/total?date=${year}-${month}-${day}&iso=${selectedRegion}`
    console.log(new_Url)
    // const { data, loading, error } = useFetchData(new_Url)
    // const deaths = data.data.deaths
    // const cases = data.data.confirmed

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
