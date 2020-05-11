import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             comment: "",
             topic:"react"
        }
    }
    handeluserchange= (event)=>{
        this.setState({
           username : event.target.value
        })
    }
    handleCommentChange=(event)=>{
        this.setState({
            comment: event.target.value
        })
    }
    handleTopicChange= (event) =>{
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmitchange= (event) =>{
         alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
         event.preventDefault()

    }
    render() {
        return (
            <div>
                 <form onSubmit={this.handleSubmitchange}>
                       <div>
                           <label>Username</label>
                           <input type="text" value={this.state.username} onChange={this.handeluserchange} />
                       </div>
                       <div>
                           <label>Comments</label>
                           <textarea value={this.state.comment} onChange={this.handleCommentChange}></textarea>
                       </div>
                       <div>
                           <label>Topic</label>
                           <select value={this.state.topic} onChange={this.handleTopicChange}>
                                  <option value="react">React</option>
                                  <option value="angular">Angular</option>
                                  <option value="vue">Vue</option>
                           </select>
                       </div>
                       <button type="submit">Submit</button>
                 </form>
            </div>
        )
    }
}

export default Form
