import React from 'react';
import {NavLink} from 'react-router-dom';
import '../css/Navbar.css';



const Navbar = ()=> {
    return(<div>
        <NavLink to ="/">Home</NavLink>
        {/* <NavLink to ="/about">About</NavLink>
        <NavLink to ="/contact">Contact<NavLink> */}

    </div>
        )
}

export default Navbar;





