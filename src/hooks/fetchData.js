import React, { useState, useEffect } from 'react'
import axios from 'axios'

export function useFetchData(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        async function fetch() {
            try {
                const {data} = await axios.get(url)
                setData(data)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetch()
    }, [url])

  return {data, loading, error}
}

// export function useNewFetchData(url) {
//     const [newData, setNewData] = useState(null)
//     const [newLoading, setNewLoading] = useState(true)
//     const [newError, setNewError] = useState(null)

//     useEffect(() => {
//         setNewLoading(true)
//         function fetch() {
//             try {
//                 const {newData} = axios.get(url)
//                 setNewData(newData)
//             } catch (err) {
//                 setNewError(err.message)
//             } finally {
//                 setNewLoading(false)
//             }
//         }
//         fetch()
//     }, [url])

//   return {newData, newLoading, newError}
// }


