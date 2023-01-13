import MemeCard from '../MemeCard/MemeCard'
import './Main.scss'

const Main = ({  }) => {
  return (
    <div className="main">
      <MemeCard />
      <div className="button-container">
        <button>Save</button>
        <button>Next</button>
      </div>
    </div>
  )
}

export default Main
