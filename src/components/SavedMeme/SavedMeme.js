// The is the small card display the saved meme. Many of these will be displayed in the MyMemes container.
import './SavedMeme.scss'

const SavedMeme = ({ meme, deleteMeme }) => {
  return <div className="saved-meme-container" id={ meme.id }>
    <img className="saved-image"src={ meme.url }></img>
    <button onClick={ () => deleteMeme(meme.id) } >Delete</button>
  </div>
}

export default SavedMeme
