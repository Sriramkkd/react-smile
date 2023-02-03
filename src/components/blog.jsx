import React, { Component } from "react";
import axios from "axios";
import {BrowserRouter as Router,Switch, RouterProvider, Routes, Route, Link}from "react-router-dom";
export default class blog extends Component{
    
    state={
        posts:[],
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            this.setState({
                posts:response.data
            })
        })
        .catch(function(error){
        })
    }

    render(){
        const post = this.state.posts;
        const allposts = post.map((post,idx) =>{
            return (
                <div>
                    <a href="" key={idx}>{post.title}</a><br/>
                    <p>{post.body}</p>
                </div>
            );
        });
            return (
                <div>
                    <h1>This is Blog Component</h1>
                    <Link to="/writepost">Add New</Link>
                    <div className="media">
                        <div className="media-body text-center">
                            {allposts}
                        </div>
                    </div>
                </div>
            );
         
    }
}