import React, { Component } from 'react'
import './App.scss'
import NavBar from '../NavBar/NavBar'
import Main from '../Main/Main'
import MyMemes from '../MyMemes/MyMemes'
import Footer from '../Footer/Footer'
// import getMemes from '../../apiCalls/apiCalls'
import dummyData from '../../apiCalls/mock-data'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


class App extends Component {
  constructor() {
    super()
    this.state = dummyData
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
            <Main allMemes= { this.state.dummyData } />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
    )
  }
}

export default App
