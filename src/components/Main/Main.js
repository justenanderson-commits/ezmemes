import './Main.scss'
import PropTypes from 'prop-types'

const Main = ({ currentMeme, getRandomMeme, handleSave }) => {
  return (
    <>
      <div className="main">
        <div className="button-container">
          <button
            className="save-button"
            onClick={() => handleSave(currentMeme)}
          >
            Save
          </button>
          <button className="next-button" onClick={() => getRandomMeme()}>
            Next
          </button>
        </div>
        <div className="meme-container">
          <img
            data-cy="image"
            src={currentMeme.url}
            className="meme-img"
            alt="Random meme image"
            id={currentMeme.id}
          />
        </div>
      </div>
    </>
  )
}

export default Main

Main.propTypes = {
  currentMeme: PropTypes.shape({
    url: PropTypes.string,
    id: PropTypes.string,
    key: PropTypes.number,
  }),
  getRandomMeme: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
}
