import React, {useEffect, useState} from 'react';
import {Col, Form, Row} from "react-bootstrap";
import DashTable from "./common/DashTable";
import {checkAuth} from "../../lib/checkAuth";
import Axios from "../../lib/Axios";

function Watchlist({allStocks}) {

    let [topFive, setTopFive] = useState([])
    let fiveStocks = [...allStocks]
    useEffect(()=>{
        if(allStocks){
            fiveStocks.sort((a, b)=>{
                return b.yhat_30_ratio - a.yhat_30_ratio
            }).slice(0,5)
            setTopFive(fiveStocks)
        }
    },[allStocks])

    useEffect(()=>{
        // getWatchlist()
        // addToWatchlist()
    },[])

    async function getWatchlist(){
        let {data} = await Axios.get('/api/watchlist/')
        console.log(data)
    }
    async function addToWatchlist(){
        let {data} = await Axios.post('/api/watchlist/',
            {"id": "87994265-b1c7-457c-b793-30cf804e5008"})
        console.log(data)
    }

    return (
        <>
            <h1>Watch List</h1>
            <Row className="mb-4 no-gutters">
                <Col className="col-12">
                    <Form inline>
                        <div className="search-bar search-bar-dash material-icons">
                            <input type="text" placeholder="Search Stocks" />
                        </div>
                    </Form>
                </Col>
            </Row>
            <Row className="no-gutters">
                <Col className="col-12 col-xl-6">
                    <DashTable />
                </Col>
                <Col className="col-12 col-xl-6">
                    <DashTable topFive={topFive} />
                </Col>
            </Row>
        </>
    );
}

export default Watchlist;
