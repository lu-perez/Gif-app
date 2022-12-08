import { useState, useEffect } from 'react'
import { getAPI } from '../helpers/getAPI'

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([])
  const [isLoading, setIsloading] = useState(true)

  const getGifs = async () => {
    const gifs = await getAPI(category)
    setGifs(gifs)
    setIsloading(false)
  }

  useEffect(() => {
    getGifs()
  }, [])

  return {
    gifs,
    isLoading
  }
}
