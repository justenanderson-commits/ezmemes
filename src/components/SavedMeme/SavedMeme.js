// The is the small card display the saved meme. Many of these will be displayed in the MyMemes container.
import './SavedMeme.scss'

const SavedMeme = () => {
  return <div className="saved-meme-container">
    <img className="saved-image"src="https://clideo.com/files/content/twitter-meme-maker-1.png"></img>
    <button>Delete</button>
  </div>
}

export default SavedMeme
