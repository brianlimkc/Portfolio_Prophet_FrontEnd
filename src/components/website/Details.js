import React, {useEffect, useState} from 'react';
import {Col, Image, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import bitcoin from "../../assets/bitcoin.png";
import ForecastData from "./common/ForecastData";
import CardBlock from "./common/CardBlock";
import ForecastRecommendation from "./common/ForecastRecommendation";
import Graph from "../common/Graph";
import axios from "axios";

function Details({dashboard}) {
    let {symbol} = useParams()
    const [stockDetail, setStockDetail] = useState([])
    const [forecastRecord, setforecastRecord] = useState([])
    // const [historicalRecord, sethistoricalRecord] = useState([])

    useEffect(()=>{
        async function getStock(){
            let {data} = await axios.get(`/show?stock=${symbol}`);
            setStockDetail(data["stock_record"])
            setforecastRecord(data["forecast_record"])
            // sethistoricalRecord(data["historical_record"])
        }
        getStock()
    },[])


    let max = 0
    let min = 0
    let data = []

    if(forecastRecord){

        data = forecastRecord.map((element) => {
            const dateConvert = new Date(element['date']).toLocaleDateString('en-GB', {  year: 'numeric', month: 'short'})
            if(element['price'] !== "0.00"){
                return {
                    date : dateConvert,
                    yhat : element['yhat'],
                    yhat_range : [element["yhat_upper"], element["yhat_lower"]],
                    price: element['price']
                }
            }else{
                return {
                    date : dateConvert,
                    yhat : element['yhat'],
                    yhat_range : [element["yhat_upper"], element["yhat_lower"]]
                }
            }
        })

        console.log(data)

        for (let i in forecastRecord){

            if(max < parseInt(forecastRecord[i]['yhat_upper'])){
                max = parseInt(forecastRecord[i]['yhat_upper'])
            }

            if(parseInt(forecastRecord[i]['yhat_lower']) < 0){
                if(min > parseInt(forecastRecord[i]['yhat_lower'])){
                    min = parseInt(forecastRecord[i]['yhat_lower'])
                }
            }
        }

        max = max+100;
        min = min-100;
    }

    return (
        <div className="section details">
            <Row className="no-gutters justify-content-center">
                <Col className={`d-flex align-items-center mb-5 ${dashboard === "true" ? "col-12 col-sm-8 col-md-6" : "col-11 col-sm-7 col-md-8"}`}><h2>{stockDetail.name} ({stockDetail.symbol})</h2></Col>
                <Col className={`d-flex justify-content-start justify-content-sm-end mb-5 ${dashboard === "true" ? "col-12 col-sm-4 col-md-6" : "col-11 col-sm-4 col-md-3"}`}><button className="btn btn-primary mr-3">Add to Portfolio</button> <button className="btn btn-secondary">Remove from Watch List</button></Col>
            </Row>
            <Row className="no-gutters justify-content-center">
                <Col className={`${dashboard === "true" ? "col-12 col-xl-5" : "col-11 col-xl-5"}`}>
                    <Row className="no-gutters">
                        <Col className="col-6">
                            <CardBlock stockDetail={stockDetail} price="true" />
                        </Col>
                        <Col className="col-6">
                            <CardBlock stockDetail={stockDetail} change="true" />
                        </Col>
                        <ForecastRecommendation stockDetail={stockDetail} />
                    </Row>
                </Col>
                <ForecastData forecastData={forecastRecord} dashboard={dashboard} />
            </Row>
            <Row className="no-gutters justify-content-center">
                <Col className={`${dashboard === "true" ? "col-12" : "col-11"}`}>
                    <div className="d-flex flex-column card-block pr-0 pl-0">
                        <div className="list--title">Forecast Graph</div>
                        <div className="card">
                            <Graph data={data} min={min} max={max} />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Details;
