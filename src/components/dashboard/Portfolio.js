import React, {useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import DashCard from "./common/DashCard";
import DashTable from "./common/DashTable";
import Axios from '../../lib/Axios'

function Portfolio() {
    let [portfolio, setPortfolio] = useState([])
    let [portfolioTransactions, setPortfolioTransactions] = useState([])
    useEffect(()=>{
        getPortfolioTransactions()
        generatePortfolio()
    },[])

    async function getPortfolioTransactions(){
        let {data} = await Axios.get('/api/portfolio/')
        setPortfolioTransactions(data['portfolio_stocks'])
        console.log(data)
        generatePortfolio(data)
    }
    async function deleteStockFromPortfolio(){
        let {data} = await Axios.post('/api/portfolio_delete/', {"id": "416294a0-d286-4f5f-a86a-834bb2679d2c"})
        console.log(data)
    }

    function generatePortfolio(pfTransactions){
        for (let transaction in pfTransactions){
            console.log(transaction)
        }
    }

    return (
    <>
        <h1>Portfolio</h1>
        <Row className="mb-4 no-gutters">
            <Col className="col-12 col-md-3">
                <DashCard />
            </Col>
            <Col className="col-12 col-md-3">
                <DashCard />
            </Col>
        </Row>
        <Row className="mb-4 no-gutters">
            <Col className="col-12">
                <DashCard />
            </Col>
        </Row>
        <Row className="mb-4 no-gutters">
            <Col className="col-12">
                <DashTable stocks={portfolio} removeFromTable={deleteStockFromPortfolio} />
            </Col>
        </Row>
        <Row className="no-gutters">
            <Col className="col-12 col-md-6">
                <DashCard />
            </Col>
            <Col className="col-12 col-md-6">
                <DashCard />
            </Col>
        </Row>
    </>
    );
}

export default Portfolio;
