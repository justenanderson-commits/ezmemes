import MemeCard from '../MemeCard/MemeCard'
import './Main.scss'

const Main = ({ title, url, id }) => {
  console.log('Main title: ', title)
  console.log('Main url: ', url)
  console.log('Main id: ', id)
  return (
    <div className="main">
       <div className="meme-container">
        <h4>{ title }</h4>
        <img src={ url } className="meme-img" alt-text="Random meme image" id={ id } /> 
      </div>
      <div className="button-container">
        <button>Save</button>
        <button>Next</button>
      </div>
    </div>
  )
}

export default Main
