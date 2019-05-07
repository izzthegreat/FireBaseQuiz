import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Navbar.css"

//import {Nav, Navbar, Container} from 'react-bootstrap'
import {Navbar, NavDropdown } from 'react-bootstrap'



function Navigation (){
    return (
<Navbar bg = "info" size = "lg">
    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1"><Link to="/">Home</Link></NavDropdown.Item><br/>
        <NavDropdown.Item href="#action/3.2"><Link to="/quizSelect">Take a Quiz!!</Link></NavDropdown.Item><br/>
        <NavDropdown.Item href="#action/3.3"><Link to="/editor">Make a Quiz</Link></NavDropdown.Item></NavDropdown>
</Navbar>


// <Dropdown>
//   <Dropdown.Toggle variant="info" size = "lg" id="dropdown-basic">
//     Menu
//   </Dropdown.Toggle>

//   <Dropdown.Menu>
//     <Dropdown.Item href="#/action-1"><Link to="/">Home</Link></Dropdown.Item>
//     <Dropdown.Item href="#/action-2"><Link to="/quizSelect">Take a Quiz!!</Link></Dropdown.Item>
//     <Dropdown.Item href="#/action-3"><Link to="/editor">Make a Quiz</Link></Dropdown.Item>
//   </Dropdown.Menu>
// </Dropdown>




// {/* <Container>
//         <Navbar bg= "dark" variant = "info">
//         <Nav className = "mr-auto">
//             <Link Link to  = "/">Home</Link>
//             <Link Link to  ="/quizSelect">Take a Quiz</Link>
//             <Link Link to  ="/editor">Make a Quiz</Link>
//         </Nav>
//         </Navbar>
//         </Container> */}
//         // <nav className = "navbar">
        
//         //            <div> <Button variant = "info"><Link to="/">Home</Link></Button>
                
//         //             <Button variant = "info"><Link to="/quizSelect">Take a Quiz!!</Link></Button>
               
//         //             <Button variant = "info"> <Link to="/editor">Make a Quiz</Link></Button>
//         //             </div>
           
//         // </nav>

    )
}

export default Navigation