import MemeCard from '../MemeCard/MemeCard'
import './Main.scss'

const Main = ({ currentMeme, getRandomMeme, handleSave }) => {
  return (
    <div className="main">
      <div className="button-container">
        <button onClick={() => handleSave(currentMeme)}>Save</button>
        <button onClick={() => getRandomMeme()}>Next</button>
      </div>
      <div className="meme-container">
        <img
          data-cy="image"
          src={currentMeme.url}
          className="meme-img"
          alt-text="Random meme image"
          id={currentMeme.id}
        />
      </div>
    </div>
  )
}

export default Main
