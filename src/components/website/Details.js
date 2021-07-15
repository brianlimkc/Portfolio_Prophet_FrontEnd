import React, {useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import ForecastData from "./common/ForecastData";
import CardBlock from "./common/CardBlock";
import ForecastRecommendation from "./common/ForecastRecommendation";
import Graph from "../common/Graph";
import axios from "axios";

function Details({auth, watchlist, addToWatchlist, removeFromWatchList}) {
    let {symbol} = useParams()
    const [stockDetail, setStockDetail] = useState([])
    const [forecastRecord, setforecastRecord] = useState([])
    let [foundStock, setFoundStock] = useState(false)

    useEffect(() => {
        async function getStock() {
            let {data} = await axios.get(`/api/show?stock=${symbol}`);
            setStockDetail(data["stock_record"])
            setforecastRecord(data["forecast_record"])
        }

        getStock()
    }, [])


    let max = 0
    let min = 0
    let data = []

    if (forecastRecord) {

        data = forecastRecord.map((element) => {
            const dateConvert = new Date(element['date']).toLocaleDateString('en-GB', {year: 'numeric', month: 'short'})
            if (element['price'] !== "0.00") {
                return {
                    date: dateConvert,
                    yhat: element['yhat'],
                    yhat_range: [element["yhat_upper"], element["yhat_lower"]],
                    price: element['price']
                }
            } else {
                return {
                    date: dateConvert,
                    yhat: element['yhat'],
                    yhat_range: [element["yhat_upper"], element["yhat_lower"]]
                }
            }
        })

        for (let i in forecastRecord) {

            if (max < parseInt(forecastRecord[i]['yhat_upper'])) {
                max = parseInt(forecastRecord[i]['yhat_upper'])
            }

            if (parseInt(forecastRecord[i]['yhat_lower']) < 0) {
                if (min > parseInt(forecastRecord[i]['yhat_lower'])) {
                    min = parseInt(forecastRecord[i]['yhat_lower'])
                }
            }
        }

        max = max + 100;
        min = min - 100;
    }

    useEffect(() => {
        if (watchlist && stockDetail) {
            watchlist.filter(element => {
                if (stockDetail.id === element.id) {
                    setFoundStock(true)
                }
            })
        }
    }, [stockDetail])

    function resetButton(stock_id){
        if(foundStock){
            removeFromWatchList(stock_id)
            setFoundStock(false)
        }else{
            addToWatchlist(stock_id)
            setFoundStock(true)
        }
    }

    return (
        <div className={`section details ${auth && "dash-card-block"}`}>
            <Row className="no-gutters justify-content-center">
                <Col className={`d-flex align-items-center mb-5 ${auth ? "col-12 col-sm-8 col-md-6" : "col-11"}`}>
                    <h2>{stockDetail.name} ({stockDetail.symbol})</h2></Col>
                {auth && <Col
                    className={`d-flex flex-wrap justify-content-start justify-content-sm-end mb-5 col-12 col-sm-4 col-md-6`}>
                    <button className="btn btn-primary mb-3 mb-lg-0 mr-0 mr-lg-3">Add to Portfolio</button>
                    {foundStock ?
                        <button className="btn btn-secondary" onClick={() => resetButton(stockDetail.id)}>Remove
                            from Watch List</button> :
                        <button className="btn btn-primary" onClick={() => resetButton(stockDetail.id)}>Add to Watch
                            List</button>}</Col>}
            </Row>
            <Row className="no-gutters justify-content-center">
                <Col className={`${auth ? "col-12 col-xl-5" : "col-11 col-xl-5"}`}>
                    <Row className="no-gutters">
                        <Col className="col-12 col-lg-6">
                            <CardBlock stockDetail={stockDetail} price="true"/>
                        </Col>
                        <Col className="col-12 col-lg-6">
                            <CardBlock stockDetail={stockDetail} change="true"/>
                        </Col>
                        <ForecastRecommendation stockDetail={stockDetail}/>
                    </Row>
                </Col>
                <ForecastData forecastData={forecastRecord} auth={auth}/>
            </Row>
            <Row className="no-gutters justify-content-center">
                <Col className={`${auth ? "col-12" : "col-11"}`}>
                    <div className="d-flex flex-column card-block pr-0 pl-0">
                        <div className="list--title">Forecast Graph</div>
                        <div className="card">
                            <Graph data={data} min={min} max={max}/>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Details;
