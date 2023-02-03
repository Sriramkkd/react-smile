import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Breadcrumb, BreadcrumbItem, Button, Container, Form, Nav, Navbar, NavbarBrand, NavDropdown } from "react-bootstrap";
import {BrowserRouter as Router,Switch, RouterProvider, Routes, Route, Link, NavLink}from "react-router-dom";
import App from "./App";
import About from './components/about';
import Contact from './components/contact';
import Profile from './components/profile';
import Blog from './components/blog';
import Write from "./components/writepost";

export default class header extends Component{
    render(){
        return (
            <Router>
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand ><NavLink to="/" style={({ isActive }) => ({color: isActive ? 'orange' : 'blue',})} exact>Easy Learning</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><NavLink to="/about" style={({ isActive }) => ({color: isActive ? 'orange' : 'blue',})}>About Us</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/contact" style={({ isActive }) => ({color: isActive ? 'orange' : 'blue',})}>Contact Us</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/blog" style={({ isActive }) => ({color: isActive ? 'orange' : 'blue',})}>Blog</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/profile" style={({ isActive }) => ({color: isActive ? 'orange' : 'blue',})}>Profile</NavLink></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            
            <Routes>

                <Route path="/writepost" element={<Write/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/blog" element={<Blog/>}></Route>
                <Route path="/profile" element={<Profile/>}></Route>
                <Route path="/" element={<App/>}></Route>
            </Routes>
            </div>
            </Router>
        );
    }
}