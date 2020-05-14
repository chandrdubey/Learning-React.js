import React, { Component } from 'react'

 class LifeCycleA extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name: "viki"
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

    render() {
        console.log("LifecycleA Render")
        return (
            <div>
                LifeCycle A
            </div>
        )
    }
}

export default LifeCycleA

