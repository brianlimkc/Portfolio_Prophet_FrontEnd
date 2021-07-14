import React from 'react';
import Navigation from "./common/Navigation";
import {Container} from "react-bootstrap";
import {Route} from "react-router-dom";
import Home from "./Home";
import Market from "./Market";
import Details from "./Details";
import Footer from "./common/Footer";
import Login from "./Login";

function Website({setAuth}) {
    return (
        <>
            <Navigation />
            <Container fluid className="px-0">
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/market" exact>
                    <Market />
                </Route>
                <Route path="/market/details/:symbol">
                    <Details />
                </Route>
                <Route path="/login" exact>
                    <Login setAuth={setAuth} />
                </Route>
            </Container>
            <Footer />
        </>
    );
}

export default Website;
