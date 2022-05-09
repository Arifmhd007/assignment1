import React, { Component, startTransition } from 'react'
import Header from './Header'
import Latestpostcomp from './Latestpostcomp'
import "./style.css"

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Latestpostcomp />
      </div>
    )
  }
}

export default App