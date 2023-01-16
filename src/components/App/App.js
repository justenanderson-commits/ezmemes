import React, { Component } from 'react'
import './App.scss'
import NavBar from '../NavBar/NavBar'
import Main from '../Main/Main'
import MyMemes from '../MyMemes/MyMemes'
import Footer from '../Footer/Footer'
import getMemes from '../../apiCalls/apiCalls'
import dummyData from '../../apiCalls/mock-data'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// const allMemes = dummyData.data.children

class App extends Component {
  constructor() {
    super()
    this.state = {
      memes: [],
      savedMemes: [],
      currentMeme: {}
    } 
  }

  componentDidMount = async () => {
    try {
    const data = await getMemes()
    this.setState({ memes: data.data.children, savedMemes: [], currentMeme: {}})
    this.getRandomMeme()
    } catch (error){
      console.log(error.message)
    }
  }

  getRandomMeme = () => {
    const index = Math.floor(Math.random() * this.state.memes.length)
    console.log('This state length before: ', this.state.memes.length)
    const currentMeme = this.state.memes[index].data
    console.log('This state length after: ', this.state.memes.length)
    const randomMeme = {
      title: currentMeme.title,
      url: currentMeme.url_overridden_by_dest,
      id: currentMeme.id,
    }
      this.setState({
      ...this.state,
      currentMeme: randomMeme,
    })
  }

  handleSave = async (newSavedMeme) => {
    await this.setState({
      ...this.state,
      savedMemes: [...this.state.savedMemes, newSavedMeme],
    })
  }

  handleDelete = (id) => {
    const filteredMemes = this.state.savedMemes.filter((meme) => id !== meme.id)
    this.setState({
      ...this.state,
      savedMemes: filteredMemes,
    })
  }

  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <Switch>
            <Route path="/my-memes">
              <MyMemes
                savedMemes={this.state.savedMemes}
                deleteMeme={this.handleDelete}
              />
            </Route>
            <Route path="/">
              <Main
                currentMeme={this.state.currentMeme}
                getRandomMeme={this.getRandomMeme}
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
