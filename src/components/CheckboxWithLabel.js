import React, { Component } from 'react'

export default class CheckboxWithLabel extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isChecked: false
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange () {
    this.setState({isChecked: !this.state.isChecked})
  }

  render () {
    const { props, state, onChange } = this
    return (<label><input type='checkbox' checked={state.isChecked} onChange={onChange} />{state.isChecked ? props.labelOn : props.labelOff}</label>)
  }
}
