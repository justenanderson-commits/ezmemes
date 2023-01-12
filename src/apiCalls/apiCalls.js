const getMemes = () => {
  return fetch('https://www.reddit.com/r/memes.json')
    .then(response => {
      if(!response.ok) {
        throw new Error("Couldn't reach the server")
      } 
      return response.json()
    })
}

export default getMemes