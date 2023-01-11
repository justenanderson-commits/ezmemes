

const getMemes = () => {
  return fetch('https://www.reddit.com/r/memes.json')
    .then(response => {
      if(!response.ok) {
        return response.json()
      }
    })
}

export default getMemes