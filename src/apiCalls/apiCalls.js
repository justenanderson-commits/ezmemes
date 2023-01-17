// May need to rework this to get the deployed site to work.
const getMemes = async () => {
  const url = 'https://www.reddit.com/r/memes.json'
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error("Couldn't communicate with server")
  }
  return response.json()
}

export default getMemes

