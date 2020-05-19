import React, { Component } from 'react'

 class LifeCycleA extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name: 'viki'
         }
         console.log("LifeCycleA Constructor")
     }
     static getDerivedStateFromProps(props,state){
        console.log("LifecycleA getDerivedStateFromPropsr")
        return null
     }
     componentDidMount(){
        console.log("LifecycleA componentDidMount")
     }

     shouldComponentUpdate(){
         console.log("LifecycleA shouldComponentUpdate")
         return true
     }

     getSnapshotBeforeUpdate(prevProps, prevState)
     {
        console.log("LifecycleA getSnapshotBeforeUpdat")  
        return null
     }

    componentDidUpdate(){
        console.log("LifecycleA componentDidUpdate")  
    }

    changeState = () => {
        this.setState({
            name: 'gold'
        })
    }

    

    render() {
        console.log("LifecycleA Render")
        return (
            <div>
                 <div>LifeCycle A</div>
                 <button onClick ={this.changeState}> Change state</button>
            </div>
        )
    }
}

export default LifeCycleA

