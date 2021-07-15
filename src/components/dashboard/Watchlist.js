import React, {useEffect, useState} from 'react';
import {Col, Form, Row} from "react-bootstrap";
import DashTable from "./common/DashTable";
import {checkAuth} from "../../lib/checkAuth";

function Watchlist({allStocks}) {

    let [topFive, setTopFive] = useState([])
    let fiveStocks = [...allStocks]
    useEffect(()=>{
        if(allStocks){
            fiveStocks.sort((a, b)=>{
                return b.yhat_30_ratio - a.yhat_30_ratio
            }).slice(0,4)
            setTopFive(fiveStocks)
        }
    },[allStocks])
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
                    <DashTable recoStocks="true" topFive={topFive} />
                </Col>
            </Row>
        </>
    );
}

export default Watchlist;
