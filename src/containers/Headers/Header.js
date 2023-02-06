import React from "react";

import { Link } from 'react-router-dom';

// import logo from '../../assets/logos/miu-logo.png';

import './Header.css'

const Header = () => {

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="employees" >Employee </Link></li>
                    <li><Link to="add-employee" >Add Employee</Link></li>
                </ul>
            </nav>
        </header>
    );
}



export default Header;