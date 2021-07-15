import React, {useEffect, useState} from 'react';
import {Col, Form, Row} from "react-bootstrap";
import DashTable from "./common/DashTable";
import {checkAuth} from "../../lib/checkAuth";
import Axios from "../../lib/Axios";

function Watchlist({allStocks}) {
    let [topFive, setTopFive] = useState([])

    let [watchlist, setWatchList] = useState([])

    let fiveStocks = []
    useEffect(()=>{
        if(allStocks){
            fiveStocks = [...allStocks].sort((a, b)=>{
                return b.yhat_30_ratio - a.yhat_30_ratio
            }).slice(0,5)
            console.log(fiveStocks)
            setTopFive(fiveStocks)
        }
    },[allStocks])

    async function getWatchlist(){
        let {data} = await Axios.get('/api/watchlist/')
        setWatchList(data["watchlist_stocks"])
    }

    useEffect(()=>{
        getWatchlist()
    },[])

    async function addToWatchlist(stock_id){
        let {data} = await Axios.post('/api/watchlist/', {"id": stock_id})
        getWatchlist()
    }

    async function removeFromWatchList(stock_id){
        let {data} = await Axios.post(`/api/watchlist_delete/`, {"id": stock_id})
        getWatchlist()
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
                    <DashTable watchList="true" stocks={watchlist} removeFromWatchList={removeFromWatchList} />
                </Col>
                <Col className="col-12 col-xl-6">
                    <DashTable addToWatchlist={addToWatchlist} recoStocks="true" stocks={topFive} />
                </Col>
            </Row>
        </>
    );
}

export default Watchlist;
