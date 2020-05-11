import React, { Component } from 'react'

class Welcome extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             messege:'Welcome People'
        }
    }
    changemessage(){
        this.setState(
            {messege:'Thanks'
        })
    }
    
    render(){
        return  (
           <div>
               <p>{this.state.messege}</p>
               <button onClick={() => this.changemessage()}>Subscribe</button>  
           </div>   
        )
    }
}

export default Welcome