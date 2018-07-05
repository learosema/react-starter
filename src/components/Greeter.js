import React, { Component } from 'react'

export default class Greeter extends Component {
  render () {
    const { name, color } = this.props
    return <h1>Hello! I'm <span style={{color: color}}>{name}</span>!</h1>
  }
}
