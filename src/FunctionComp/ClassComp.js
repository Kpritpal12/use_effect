import React, { Component } from 'react'

  class ClassComp extends Component {
    state={
        message:'welcome'
    }
    clickHandle=()=>{
        this.setState({
            message:'good bye'
        })
    }

  render() {
    return (
      <div>
          <h1>
              {this.state.message}
          </h1>
          <button onClick={this.clickHandle}>click</button>
      </div>
    )
  }
}

export default ClassComp