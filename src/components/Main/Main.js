import MemeCard from '../MemeCard/MemeCard'
import './Main.scss'

const Main = ({ error, currentMeme, getRandomMeme, handleSave }) => {
  return (
    <>
     {!error && <h4 className="text--error">Couldn't communicate with the server. Try again later.</h4>}
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
    </>

  )
}

export default Main
