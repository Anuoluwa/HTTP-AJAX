import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css'
const Nav = () => {
    return(
        <div>
            <ul>
                <NavLink exact to='/'>Home</NavLink>
  
                <NavLink to='/add'>Add Friend</NavLink>
            </ul>
        </div>
    );
}

export default Nav;