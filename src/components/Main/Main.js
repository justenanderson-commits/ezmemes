import MemeCard from '../MemeCard/MemeCard'
import './Main.scss'

const Main = ({ randomMeme, handleSave }) => {
  return (
    <div className="main">
      <div className="button-container">
        <button onClick={ () => handleSave(randomMeme) }>Save</button>
        <button>Next</button>
      </div>
      <div className="meme-container">
        <img
          src={randomMeme.url}
          className="meme-img"
          alt-text="Random meme image"
          id={randomMeme.id}
        />
      </div>
      
    </div>
  )
}

export default Main
