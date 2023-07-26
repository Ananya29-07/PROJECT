import React from "react";
import { NavLink } from "react-router-dom";

import './NavLinks.css';

const NavLinks = props => {
   return <ul className="nav-links">
        <li>
          <NavLink to = "/" exact>CREATOR</NavLink>
        </li>
        <li>
          <NavLink to = "/tasks/t1" exact>ALL TASKS</NavLink>
        </li>
        <li>
          <NavLink to = "/tasks/">CREATE TASK</NavLink>
        </li>
     </ul>
};

export default NavLinks;