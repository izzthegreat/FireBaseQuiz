import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import { Link } from 'react-router-dom'
import "../css/Navbar.css"
import {Button} from 'react-bootstrap'


function Navbar (){
    return (
        <nav className = "navbar">
        
            {/* <ul>
                <li> */}
                   <div> <Button bsStyle = "primary"><Link to="/">Home</Link></Button>
                {/* </li>
                <li> */}
                    <Link to="/quizSelect">Take a Quiz!!</Link>
                {/* </li>
                <li> */}
                    <Link to="/editor">Make a Quiz</Link>
                    </div>
                {/* </li>
            </ul> */}
        </nav>
    )
}

export default Navbar