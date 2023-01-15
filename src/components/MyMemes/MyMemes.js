// This is the container for all of the small, saved memes.

import SavedMeme from '../SavedMeme/SavedMeme'
import './MyMemes.scss'

const MyMemes = ({ savedMemes, deleteMeme }) => {
  const displaySavedMemes = savedMemes.map((meme) => {
    return <SavedMeme 
    meme={ meme }
    key={ meme.id }
    deleteMeme={ deleteMeme }
    />
  })

  return (
    <div className="my-memes">
      { displaySavedMemes }
    </div>
  )
}

export default MyMemes
