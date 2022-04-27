import React, { Component } from 'react'

export default class Counter extends Component {

  componentDidUpdate(prevprop,prevst){
      if(prevprop.num!==this.props.num){
        console.log("updated");
      }
  }
  render() {
    return (
      <div>
          <h1>{this.props.num}</h1>
      </div>
    )
  }
}
