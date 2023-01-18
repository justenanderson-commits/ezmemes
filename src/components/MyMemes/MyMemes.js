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
        <>
          <p className="save-meme-message">
            You haven't saved any memes. Go <a href="/"> Home </a> to save some!
          </p>
          <img
            src="https://i.imgflip.com/vqees.jpg"
            alt="If memes didn't exist, would there still be philosophers who are raptors?"
            className="no-meme-image"
          ></img>
        </>
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
