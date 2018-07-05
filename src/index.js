import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Greeter from './components/Greeter'
import CheckboxWithLabel from './components/CheckboxWithLabel'

import './styles.css'

class MyApp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mood: '🌈',
      jobTitle: 'Full Stack Web Unicorn🦄'
    }
  }

  render () {
    const { jobTitle } = this.state
    return <div>
      <Greeter name='Lea' color='salmon' />
      <h2>I'm a {jobTitle}.</h2>
      <p>My mood today is: {this.state.mood}</p>
      <p><em>NOTE:</em> This checkbox below makes absolutely no sense 💁</p>
      <CheckboxWithLabel labelOn='Cancel' labelOff='Okay' />
    </div>
  }
}

ReactDOM.render(<MyApp />, document.getElementById('app'))
