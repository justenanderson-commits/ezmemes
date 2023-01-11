// This is the container for all of the small, saved memes.

import React, { Component } from 'react'
import SavedMeme from '../SavedMeme/SavedMeme'
import './MyMemes.scss'

class MyMemes extends Component {
  constructor() {
    super()
    this.state = ''
  }
  render() {
    return (
      <div className="my-memes">
        <SavedMeme />
        <SavedMeme />
        <SavedMeme />
        <SavedMeme />
        <SavedMeme />
        <SavedMeme />
        <SavedMeme />
        <SavedMeme />
      </div>
    )
  }
}

export default MyMemes
