import React, { Component } from 'react'
import SavedMeme from '../SavedMeme/SavedMeme'

class MyMemes extends Component {
  constructor() {
    super()
    this.state = ''
  }
  render() {
    return (
      <div className="my-memes">
        My Memes Component
        <SavedMeme />
      </div>
    )
  }
}

export default MyMemes
