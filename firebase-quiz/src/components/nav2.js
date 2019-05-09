import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import "../css/Navbar.css"
import {Navbar, Nav } from 'react-bootstrap'



export default function Navigation (){
    return (
<Navbar className = "navbar" bg="info" size = "lg" expand = "lg">
        <Nav.Link className="link" href="/">Home</Nav.Link>
        <Nav.Link className="link" href="/quizSelect">Take a Quiz!</Nav.Link>
        <Nav.Link className="link" href="/editor">Make a quiz!</Nav.Link>
</Navbar>
    )