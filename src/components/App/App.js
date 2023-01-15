import React, { Component } from 'react'
import './App.scss'
import NavBar from '../NavBar/NavBar'
import Main from '../Main/Main'
import MyMemes from '../MyMemes/MyMemes'
import Footer from '../Footer/Footer'
import getMemes from '../../apiCalls/apiCalls'
import dummyData from '../../apiCalls/mock-data'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const allMemes = dummyData.data.children

class App extends Component {
  constructor() {
    super()
    this.state = {
      memes: allMemes,
      savedMemes: [],
    } //Using dummyData - Continue to test with fetch during development
    // this.state = { memes: []} //Using dummyData - Continue to test with fetch during development
  }

  // componentDidMount = async () => {
  // ADD A CALLBACK FUNCTION IN HERE
  //   try {
  //     const allMemes = await getMemes()
  //     this.setState({memes: allMemes})
  //   } catch(error) {
  //     this.setState({error: error.message})
  //   }
  // RETURN CALLBACK FUNCTION
  // }

  getRandomMeme() {
    console.log('All Memes: ', allMemes)
    console.log("State meems: ", this.state)
    const index = Math.floor(Math.random() * 25)
    const currentMeme = this.state.memes[index].data
    const randomMeme = {
      title: currentMeme.title,
      url: currentMeme.url_overridden_by_dest,
      id: currentMeme.id,
    }
    return randomMeme
  }

  handleSave = async (newSavedMeme) => {
    console.log("New saved Meme: ", newSavedMeme)
    await this.setState({
      ...this.state,
      savedMemes: [ ...this.state.savedMemes, newSavedMeme ]
    })
  }

  handleDelete = (id) => {
    const filteredMemes = this.state.savedMemes.filter(meme => id !== meme.id)
    this.setState({
      ...this.state,
      savedMemes: filteredMemes
    })
  }

  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <Switch>
            <Route path="/my-memes">
              <MyMemes savedMemes={ this.state.savedMemes } deleteMeme={ this.handleDelete } />
            </Route>
            <Route path="/">
              <Main
                randomMeme={this.getRandomMeme(this.state.memes)}
                getRandomMeme={ this.getRandomMeme }
                handleSave={this.handleSave}
              />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
// getMemes()
//   .then(data => {
//     // this.setState({ memes: data.data.children})
//   })
//   .catch(error => {
//     console.log('Error message from catch: ', error.message)
//     this.setState({ [error]: error.message })
//     // console.log('state: ', this.state)
//   })
