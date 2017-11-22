import React from 'react';
import "./NavbarStyle.css";
import dTourLogo from "./dTourLogo.svg"
import { Modal } from '../Modal';

const Navbar = () => (
    
    <ul className="ul-cont">
        <li><a className="navgrp1" href="#"><img src={dTourLogo}></img></a></li>
        <li><a className="navgrp1" href="#search">Search</a></li>
        <li><a className="navgrp1" href="#contact">Contact</a></li>
        <li className="auth"><Modal style={{
            color: `white`,
            textDecoration: `none`,
            width: 0,
            border: 0,
            padding: 0,
            margin: 0,
          }} /></li>
    </ul>
);
export default Navbar;