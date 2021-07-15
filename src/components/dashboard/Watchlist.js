import React, {useEffect, useState} from 'react';
import {Col, Form, Row} from "react-bootstrap";
import DashTable from "./common/DashTable";

function Watchlist({allStocks, addToWatchlist, watchlist, removeFromWatchList}) {
    let [topFive, setTopFive] = useState([])

    let fiveStocks = []
    useEffect(()=>{
        if(allStocks){
            fiveStocks = [...allStocks].sort((a, b)=>{
                return b.yhat_30_ratio - a.yhat_30_ratio
            }).slice(0,5)
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
                <Col className={`col-12 col-xl-6`}>
                    <DashTable watchList="true" stocks={watchlist} removeFromWatchList={removeFromWatchList} />
                </Col>
                <DashTable addToWatchlist={addToWatchlist} recoStocks="true" stocks={topFive} />
            </Row>
        </>
    );
}

export default Watchlist;
