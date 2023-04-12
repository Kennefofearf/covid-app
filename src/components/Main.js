import React from 'react'
import { useFetchData } from '../hooks/fetchData'

export default function Main(props) {
    var { selected, data, new_Url, loading } = props

    if (selected === 'Global') {
        return <div>
            Globobble
        </div>
    } else {
      // data = useFetchData(new_Url)
      // console.log(data)
      // {data.data != null
      // {!loading
      // console.log(new_Url)
      // var deaths = data
      // console.log(deaths)
      // }
      // }
  return (
    <div>
      
    </div>
  )
    }
}
