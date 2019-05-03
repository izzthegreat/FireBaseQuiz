import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <NavLink to = "/home"> Home</NavLink>
            <NavLink to = "/account">Account </NavLink>
            <NavLink to = "/quiz">Quiz </NavLink>
            <NavLink to = "/score">Score </NavLink>
            <NavLink to = "/placeholder">Placeholder</NavLink>
        </div>
    )
}
export default Navigation; 