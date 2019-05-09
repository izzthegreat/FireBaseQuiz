import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
// import { Link } from 'react-router-dom'
import "../css/Navbar.css"
//import {Nav, Navbar, Container} from 'react-bootstrap'
import {Navbar, Nav } from 'react-bootstrap'



export default function Navigation (){
    return (
<Navbar className = "navbar" bg="info" size = "lg" expand = "lg">
        <Nav.Link className="link" href="/">Home</Nav.Link>
        <Nav.Link className="link" href="/quizSelect">Take a Quiz!</Nav.Link>
        <Nav.Link className="link" href="/editor">Make a quiz!</Nav.Link>
</Navbar>
    )
}
    //  <NavDropdown className = "menu" title="Menu" id="basic-nav-dropdown" align="">
    //     <NavDropdown.Item href="#action/3.1"><Link to="/">Home</Link></NavDropdown.Item><br/>
    //     <NavDropdown.Item href="#action/3.2"><Link to="/quizSelect">Take a Quiz!!</Link></NavDropdown.Item><br/>
    //     <NavDropdown.Item href="#action/3.3"><Link to="/editor">Make a Quiz</Link></NavDropdown.Item></NavDropdown>  














// export default Navigation