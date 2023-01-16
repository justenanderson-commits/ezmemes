import React, { Component } from 'react'
import './App.scss'
import NavBar from '../NavBar/NavBar'
import Main from '../Main/Main'
import MyMemes from '../MyMemes/MyMemes'
import Footer from '../Footer/Footer'
import getMemes from '../../apiCalls/apiCalls'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      memes: [],
      savedMemes: [],
      currentMeme: {},
    }
  }

  componentDidMount = async () => {
    try {
      const data = await getMemes()
      this.setState({
        memes: data.data.children,
        savedMemes: [],
        currentMeme: {},
        error: '',
      })
      this.getRandomMeme()
    } catch (error) {
      this.setState({ error: error.message })
      console.log(error.message)
    }
  }

  getRandomMeme = () => {
    const index = Math.floor(Math.random() * this.state.memes.length)
    const currentMeme = this.state.memes[index].data
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
          {!this.state.error && (
            <h2 className="text-error">
              {' '}
              Couldn't communicate with the server. Try again later.{' '}
            </h2>
          )}
          <Switch>
            <Route path="/my-memes">
              <MyMemes
                savedMemes={this.state.savedMemes}
                deleteMeme={this.handleDelete}
              />
            </Route>
            <Route path="/">
              <Main
                error={this.state.error}
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
