import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Navbar.css"
//import {Nav, Navbar, Container} from 'react-bootstrap'
import {Navbar, NavDropdown } from 'react-bootstrap'



function Navigation (){
    return (
<Navbar bg = "info" size = "lg">
    <NavDropdown title="Menu" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1"><Link to="/">Home</Link></NavDropdown.Item><br/>
        <NavDropdown.Item href="#action/3.2"><Link to="/quizSelect">Take a Quiz!!</Link></NavDropdown.Item><br/>
        <NavDropdown.Item href="#action/3.3"><Link to="/editor">Make a Quiz</Link></NavDropdown.Item></NavDropdown>
</Navbar>









    )
}

export default Navigation