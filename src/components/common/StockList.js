import React from 'react';
import {Col, Row} from "react-bootstrap";
import StockCard from "./StockCard";

function StockList({market}) {
    return (
        <Row className="section justify-content-center no-gutters">
            {(market !== "true") &&
                <Col className="col-11">
                    <h4>Watch List</h4>
                </Col>
            }
            <Col className="col-11 d-flex watchlist">
                <div className="watchlist--title">Name</div>
                <div className="watchlist--title">Latest Price</div>
                <div className="watchlist--title">% Change</div>
                <div className="watchlist--title">Volume Transacted</div>
                <div className="watchlist--title">Prediction</div>
            </Col>
            <StockCard />
        </Row>
    );
}

export default StockList;