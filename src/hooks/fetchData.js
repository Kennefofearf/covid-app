import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { fetchNow } from '../components/Main'

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

export function useFetchNewData(url) {
    const [newData, setNewData] = useState(null)
    const [newLoading, setNewLoading] = useState(true)
    const [newError, setNewError] = useState(null)
    
    useEffect(() => {
        if (fetchNow === true) {
        setNewLoading(true)
        function fetch() {
            try {
                const {newData} = axios.get(url)
                setNewData(newData)
            } catch (err) {
                setNewError(err.message)
            } finally {
                setNewLoading(false)
            }
        }
        console.log("Fetching now from " + url)
        fetch()
        console.log("Fetched...")
    }}, [url])

  return {newData, newLoading, newError}
}
