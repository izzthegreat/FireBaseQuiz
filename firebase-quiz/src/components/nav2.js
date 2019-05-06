import React from 'react'
import { Link } from 'react-router-dom'

function Navbar (){
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/quizSelect">Take a Quiz!!</Link>
                </li>
                <li>
                    <Link to="/editor">Make a Quiz</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar