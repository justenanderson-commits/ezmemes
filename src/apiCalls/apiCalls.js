const getMemes = async () => {
  const url = 'https://www.reddit.com/r/memes.json'
  const response = await fetch(url)
  if(!response.ok) {
    throw new Error("Error retrieving data")
  }
  return response.json()
}

// const getMemes = () => {
//   return fetch('https://www.reddit.com/r/memes.json')
//     .then(response => {
//       if(!response.ok) {
//         throw new Error('Error in fetch')
//       }
//       return response.json()
//     })
//     .then(data => {
//         console.log('Data: ', data)
//       })
//       .error(err => {
//         console.log("Error: ", err.message)
//       })
// }

export default getMemes