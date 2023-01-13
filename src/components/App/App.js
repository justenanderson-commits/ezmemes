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
    this.state = { memes: allMemes} //Using dummyData - Continue to test with fetch during development
    // this.state = { memes: []} //Using dummyData - Continue to test with fetch during development
  }

  getRandomMeme(allMemes) {
    const index = Math.floor(Math.random() * 25)
    const currentMeme = allMemes[index].data
    const randomMeme = {
      title: currentMeme.title,
      url: currentMeme.url_overridden_by_dest,
      id: currentMeme.id
    }
    console.log("Random Meme: ", randomMeme)
    return randomMeme
  }
    //  NOTE - Using dummyData 
  componentDidMount = () => {
    getMemes()
      .then(data => {
        // this.setState({ memes: data.data.children})
      })
      .catch(error => {
        console.log('Error message from catch: ', error.message)
        this.setState({ [error]: error.message })
        // console.log('state: ', this.state)
      })
  }

  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <Switch>
            <Route path="/my-memes">
              <MyMemes />
            </Route>
            <Route path="/">
              <Main randomMeme={ this.getRandomMeme(allMemes) }/>
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
