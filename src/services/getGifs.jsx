const apiKey = "RjogUyjU0wvG3m3vlFpvCEclhEGqMhAS&q"

const fromApiResponseToGifs = apiResponse => {
    const {data = []} = apiResponse
    if (Array.isArray(data)) {
      const gifs = data.map(image => {
        const {images, title, id} = image
        const { url } = images.downsized_medium
        return { title, id, url }
      })
      return gifs
    }
    return []
  }
  
  export default function getGifs ({limit = 25, keyword = 'morty'} = {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${keyword}&limit=${limit}&offset=0&rating=G&lang=en`
  
    return fetch(apiURL)
      .then(res => res.json())
      .then(fromApiResponseToGifs)
  }