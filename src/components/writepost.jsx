import axios from "axios";
import React, { Component } from "react";

export default class Write extends Component{
    state={
        title:'',
        body:''
    }
    FormSubmit = (event) =>{
        event.preventDefault();
        axios.post('/post',{
            title:this.state.title,
            body:this.state.body,
        })
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    render(){
        return (
<div>
    <center>
    <div class="jumbotron col-lg-4 col-md-4 col-sm-6">
        <form onSubmit={this.FormSubmit}>
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" name="title" id="title" onChange={(event)=>{this.setState({title:event.target.value})}}/>
            </div>
            <div class="form-group">
                <label for="body">Details</label>
                <textarea class="form-control" name="body" placeholder="Write Here" onChange={(event)=>{this.setState({body:event.target.value})}}>
                
                </textarea>
            </div>
            <button type="submit" class="btn btn-primary">Publish</button>   
        </form> 
    </div>
    </center>
</div>
        );
    }
}