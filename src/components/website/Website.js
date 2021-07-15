import React, {useEffect, useState} from 'react';
import Navigation from "./common/Navigation";
import {Container} from "react-bootstrap";
import {Route} from "react-router-dom";
import Home from "./Home";
import Market from "./Market";
import Details from "./Details";
import Footer from "./common/Footer";
import Login from "./Login";
import axios from "axios";

function Website({setAuth}) {

    const [stocks, getStocks] = useState([])

    useEffect(()=>{
        async function getAllStocks(){
            let {data} = await axios.get("/api/show_all/")
            getStocks(data["stock_record_all"])
        }
        getAllStocks()
    }, [])

    return (
        <>
            <Navigation stocks={stocks} />
            <Container fluid className="px-0">
                <Route path="/" exact>
                    <Home stocks={stocks} />
                </Route>
                <Route path="/market" exact>
                    <Market stocks={stocks} />
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
