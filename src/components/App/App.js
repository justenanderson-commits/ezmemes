import React, { Component } from 'react'
import './App.css';
import NavBar from '../NavBar/NavBar'
import Main from '../Main/Main'
import MyMemes from '../MyMemes/MyMemes'
import Footer from '../Footer/Footer'

class App extends Component {
  constructor() {
    super()
    this.state = ''
  }

  render () {
    return (
      <div className="app">
      <h1>App Component 2</h1>
      <NavBar />
      <Main />
      <MyMemes />
      <Footer />
      </div>
    )
  }
}

export default App;
