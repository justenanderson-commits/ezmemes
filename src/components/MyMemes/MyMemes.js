import SavedMeme from '../SavedMeme/SavedMeme'
import './MyMemes.scss'

const MyMemes = ({ savedMemes, deleteMeme }) => {
  const displaySavedMemes = savedMemes.map((meme) => {
    return <SavedMeme meme={meme} deleteMeme={deleteMeme} key={ meme.id }/>
  })

  return (
    <>
      {!savedMemes.length && 
      <h2 className="save-meme-message">Save some memes</h2>}
      <div className="my-memes">{displaySavedMemes}</div>
    </>
  )
}

export default MyMemes