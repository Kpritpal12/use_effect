import React, { Component } from 'react'
// import Counter from './Counter'
import Counter1 from './Counter1'

export class App extends Component {
     constructor(){
         super();  //for getting info present insude compoent class
         this.state={
             count:0
         }
     }
     componentDidMount(){
         console.log("componentDidMount: When component render first time");
     }
     increment(){
         this.setState({
             count:this.state.count+1
         })
     }
     componentWillUnmount(){
       console.log("component remove");
     }
  render() {
    return (
      <div>
            {/* <Counter num={this.state.count}></Counter> */}
            <Counter1 num={this.state.count}></Counter1>

              {/* <h1>{this.state.count}</h1> */}
               <button onClick={this.increment.bind(this)}>click</button>

      </div>
    );
  }
}

export default App