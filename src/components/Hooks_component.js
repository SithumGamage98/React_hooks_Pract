
import React, { Component } from 'react'

class Hooks_component extends Component {

    //create a constructor for state 

 constructor(props) {
   super(props)
 
   this.state = {
      count : 0
   }
 }
   increNumber = () => {
        this.setState({
          count:this.state.count+1
        })
    }
  render() {
    return (
      <div>
        <button onClick={this.increNumber}>Count {this.state.count}</button>
      </div>
    )
  }
}

export default Hooks_component
