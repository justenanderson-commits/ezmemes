import './SavedMeme.scss'
import PropTypes from 'prop-types'

const SavedMeme = ({ meme, deleteMeme }) => {
  return (
    <div className="saved-meme-container" id={meme.id}>
      <img className="saved-image" src={meme.url}></img>
      <button onClick={() => deleteMeme(meme.id)}>Delete</button>
    </div>
  )
}

export default SavedMeme

SavedMeme.propType = {
  meme: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  deleteMeme: PropTypes.func.isRequired,
}
