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
    this.state = allMemes[0] //Using dummyData - Continue to test with fetch during development
    // this.state = {} //Using dummyData - Continue to test with fetch during development
  }

    //  NOTE - Using dummyData - Continue to test with fetch during development// NOTE
  // componentDidMount = () => {
  //   getMemes()
  //     .then(data => {
  //       // this.setState({ memes: data.data.children})
  //     })
  //     .catch(error => {
  //       console.log('Error message from catch: ', error.message)
  //       this.setState({ [error]: error.message })
  //       // console.log('state: ', this.state)
  //     })
  // }

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
              <Main />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
