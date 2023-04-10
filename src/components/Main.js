import React from 'react'
import { useFetchData } from '../hooks/fetchData'

export default function Main(props) {
    var { selected, data, new_Url } = props

    if (selected === 'Global') {
        return <div>
            Globobble
        </div>
    } else if (selected !== 'Global') {
      data = useFetchData(new_Url)
      var deaths = data
      console.log(deaths)
  return (
    <div>

    </div>
  )
    }
}
