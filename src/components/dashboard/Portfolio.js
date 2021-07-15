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
        console.log(data)
        console.log(data['portfolio_stocks'])
        setPortfolioTransactions(data['portfolio_stocks'])
        generatePortfolio(data['portfolio_stocks'])
    }
    async function deleteStockFromPortfolio(){
        let {data} = await Axios.post('/api/portfolio_delete/', {"id": "416294a0-d286-4f5f-a86a-834bb2679d2c"})
    }

    function generatePortfolio(pfTransactions){
        console.log(pfTransactions)
        if(!pfTransactions){
            return
        }
        for (let transaction of pfTransactions){
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
                <DashTable />
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
