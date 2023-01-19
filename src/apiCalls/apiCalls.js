// const getMemes = async () => {
//   const url = 'https://www.reddit.com/r/memes.json'
//   const response = await fetch(url)
//   if (!response.ok) {
//     throw new Error("Couldn't communicate with the server. Try again later.")
//   }
//   return response.json()
// }

const getMemes = () => {
  return fetch('https://www.reddit.com/r/memes.json')
    .then((res) => {
    if (!res.ok) {
      throw Error("Couldn't communicate with the server. Try again later.")
    }
    return res.json()
  })
}

export default getMemes
