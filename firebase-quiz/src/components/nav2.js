import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Navbar.css"



function Navigation (){
    return (
    <nav style={{color: 'silver', backgroundColor: 'cyan', }}>
        <Link to='/' style={{padding: '10px'}}>Home</Link>
        <Link to='/quizSelect' style={{padding: '10px'}}>Quizzes</Link>
        <Link to='/editor' style={{padding: '10px'}}>Edit</Link>
    </nav>
    )
}
export default Navigation