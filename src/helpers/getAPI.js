export const getAPI = async (category) => {
  const apiKey = import.meta.env.VITE_API_KEY
  // const apiKey = process.env.VITE_API_KEY // for testing

  try {
    const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=20`)
    const { data } = await res.json()

    const gifs = data.map(gif => {
      return {
        id: gif.id,
        title: gif.title,
        url: gif.images?.downsized_medium.url
      }
    })
    return gifs
  } catch (err) {
    console.error(err)
  }
}
