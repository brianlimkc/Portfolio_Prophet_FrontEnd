import React from 'react';
import {Form, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom"
import logo from "../../../assets/Logo-Colored.png";

function Navigation() {
    return (
        <Navbar expand="md">
            <Navbar.Brand><NavLink to="/"><img src={logo} alt="Portfolio Prophet" /></NavLink></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="material-icons" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavLink to="/market" className="nav-link">Market</NavLink>
                    <NavLink to="/login" className="nav-link">Log In / Register</NavLink>
                </Nav>
                <Form inline>
                    <div className="search-bar material-icons">
                        <input type="text" placeholder="Search" />
                    </div>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;