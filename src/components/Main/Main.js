import MemeCard from '../MemeCard/MemeCard'
import './Main.scss'

const Main = ({ randomMeme }) => {
  return (
    <div className="main">
      <div className="meme-container">
        <h4>{randomMeme.title}</h4>
        <img
          src={randomMeme.url}
          className="meme-img"
          alt-text="Random meme image"
          id={randomMeme.id}
        />
      </div>
      {/* <h4>{ title }</h4>
        <img src={ url } className="meme-img" alt-text="Random meme image" id={ id } /> */}
      <div className="button-container">
        <button>Save</button>
        <button>Next</button>
      </div>
    </div>
  )
}

export default Main
