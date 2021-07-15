import React, {useEffect, useState} from 'react';
import {Col, Form, Row} from "react-bootstrap";
import DashTable from "./common/DashTable";
import {NavLink} from "react-router-dom";

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
        let filteredNames = allStocks.filter(element => {
            return element.symbol.toLowerCase().includes(query.toLowerCase())
        })
        setAutoSuggest(filteredNames)
    }

    return (
        <>
            <h1>Watch List</h1>
            <Row className="mb-4 no-gutters">
                <Col className="col-12">
                    <Form inline>
                        <div className="search-bar search-bar-dash material-icons">
                            <input type="text" placeholder="Search Stocks" onChange={handleInput} />
                            {textInput && <div className="auto-suggest">
                                <ul>{autosuggest.length > 0 ?
                                    autosuggest.map((stock) => (
                                        <li key={stock.id}><NavLink to={`/dashboard/details/${stock.symbol}`}>{stock.symbol}</NavLink></li>
                                    )) :
                                    <li>No Stocks Found</li>
                                }</ul>
                            </div>}
                        </div>
                    </Form>
                </Col>
            </Row>
            <Row className="no-gutters">
                <Col className={`col-12 col-xl-6`}>
                    <DashTable watchList="true" stocks={watchlist} removeFromWatchList={removeFromWatchList} />
                </Col>
                <Col className={`col-12 col-xl-6`}>
                    <DashTable addToWatchlist={addToWatchlist} recoStocks="true" stocks={topFive} />
                </Col>
            </Row>
        </>
    );
}

export default Watchlist;
