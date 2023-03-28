import React from 'react'
import { useFetchData } from '../hooks/fetchData'

export default function Main(props) {
    const { selected } = props
    const url = 'https://covid-api.com/api/reports/total?date=2020-03-14&iso=USA'
    const { data, loading, error } = useFetchData(url)

    if (selected === 'Global') {
        return <div>
            Globobble
        </div>
    }
  return (
    <div>Main</div>
  )
}
