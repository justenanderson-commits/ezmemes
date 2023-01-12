import React, { Component } from 'react'
import './App.scss'
import NavBar from '../NavBar/NavBar'
import Main from '../Main/Main'
import MyMemes from '../MyMemes/MyMemes'
import Footer from '../Footer/Footer'
import getMemes from '../../apiCalls/apiCalls'
// import dummyData from '../../apiCalls/mock-data'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


class App extends Component {
  constructor() {
    super()
    this.state = null
  }

  componentDidMount = () => {
    getMemes()
      .then(data => {
        console.log('Data: ',data)
        this.setState({ memes: data.data.children})
        console.log('state: ', this.state)

      })
      .catch(error => {
        console.log('Error message from catch: ', error.message)
        this.setState({ [error]: error.message })
        console.log('state: ', this.state)
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
