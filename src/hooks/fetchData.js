import { useState, useEffect } from 'react'
import axios from 'axios'

export function useFetchData(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    /* Fetch data as a background process. */

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


