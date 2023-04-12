import React from 'react'
import { useFetchData } from '../hooks/fetchData'

export default function Main(props) {
    var { selected, data } = props

    if (selected === 'Global') {
        return <div>
            Globobble
        </div>
    } else if (selected != 'Global') {
      var deaths = data.data.deaths
      var confirmed = data.data.confirmed
  return (
    <div>
      <p>Confirmed: {confirmed}</p>
      <p> </p>
      <p>Deaths: {deaths}</p>
    </div>
  )
    }
}
