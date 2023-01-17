import SavedMeme from '../SavedMeme/SavedMeme'
import './MyMemes.scss'
import PropTypes from 'prop-types'

const MyMemes = ({ savedMemes, deleteMeme }) => {
  const displaySavedMemes = savedMemes.map((meme) => {
    return <SavedMeme meme={meme} deleteMeme={deleteMeme} key={meme.id} />
  })

  return (
    <>
      {!savedMemes.length && (
        <h2 className="save-meme-message">Save some memes</h2>
      )}
      <div className="my-memes">{displaySavedMemes}</div>
    </>
  )
}

export default MyMemes

MyMemes.propTypes = {
  savedMemes: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  deleteMeme: PropTypes.func.isRequired,
}
