import React, {useEffect, useState} from 'react';
import {Form, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom"
import logo from "../../../assets/Logo-Colored.png";

function Navigation({stocks}) {
    let [textInput, setTextInput] = useState("")
    let [autosuggest, setAutoSuggest] = useState([])

    function handleInput(e) {
        setTextInput(e.target.value)
    }

    useEffect(() => {
        if (textInput) {
            search(textInput)
        }
    }, [textInput])

    function search(query) {
        let filteredNames = stocks.filter(element => {
            return element.symbol.toLowerCase().includes(query.toLowerCase())
        })
        setAutoSuggest(filteredNames)
    }

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
                        <input type="text" placeholder="Search" onChange={handleInput} />
                        {textInput && <div className="auto-suggest">
                            <ul>{autosuggest.length > 0 ?
                                autosuggest.map((stock) => (
                                    <li key={stock.id}><NavLink to={`/market/details/${stock.symbol}`}>{stock.symbol}</NavLink></li>
                                )) :
                                <li>No Stocks Found</li>
                            }</ul>
                        </div>}
                    </div>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;