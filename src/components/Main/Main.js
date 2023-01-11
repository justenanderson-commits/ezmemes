import MemeCard from '../MemeCard/MemeCard'
import './Main.scss'

const Main = ({ index, currentMeme, id }) => {
  return (
    <div className="main">
      <MemeCard index={index} currentMeme={currentMeme} id={id} />
      <div className="button-container">
        <button>Save</button>
        <button>Next</button>
      </div>
    </div>
  )
}

export default Main
