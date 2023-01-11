import React, { Component } from 'react'
import './App.scss'
import NavBar from '../NavBar/NavBar'
import Main from '../Main/Main'
import MyMemes from '../MyMemes/MyMemes'
import Footer from '../Footer/Footer'
// import getMemes from '../../apiCalls/apiCalls'
// import dummyData from '../../apiCalls/mock-data'

class App extends Component {
  constructor() {
    super()
    this.state = ''
  }

  render() {
    return (
      <div className="app">
        <NavBar />
        <Main />
        <MyMemes />
        <Footer />
      </div>
    )
  }
}

export default App
