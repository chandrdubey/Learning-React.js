import React, { Component } from 'react'

export class Eventbind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"hello"
        }
        this.eventHandler=this.eventHandler.bind(this)
    }
  eventHandler(){
      this.setState({
          message:"Goodbye!"
      })
  }    
    render() {
        return (
            <div>
              <h1>{this.state.message}</h1>  
              <button onClick={this.eventHandler}>Click</button>
            </div>
        )
    }
}

export default Eventbind
