import React from 'react'
import { useFetchData } from '../hooks/fetchData'

export default function Main(props) {
    const { selected } = props
    const url = 'https://covid-api.com/api/reports/total?date=2020-03-14&iiso=USA'
    const selectedRegion = {selected}
    // const date = new Date()
    // let year = date.getFullYear()
    // let month = date.getMonth() + 1
    // let day = date.getDate()
    // const new_Url = `https://covid-api.com/api/reports/total?date=${year}-${month}-${day}&iso=${selectedRegion}`
    // const { data, loading, error } = useFetchData(new_Url)
    // const deaths = data.data.deaths
    // const cases = data.data.confirmed

    if (selected === 'Global') {
        // selectedRegion = 'USA'
        return <div>
            Globobble
        </div>
    }
  return (
    <div>Main</div>
  )
}
