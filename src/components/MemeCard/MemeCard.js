// This one shows a random meme on the Main page
import './MemeCard.scss'

const MemeCard = ({ index, currentMeme, id}) => {
    return (
      <div className="main">
        <h4>Title?</h4>
        <img src="https://media.sproutsocial.com/uploads/meme-example.jpg"className="meme-img" alt-text="Random meme image" id="1" /> 
      </div>
    )
}

export default MemeCard
