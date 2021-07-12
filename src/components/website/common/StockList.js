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
                <div className="list--title">Name</div>
                <div className="list--title">Latest Price</div>
                <div className="list--title">% Change</div>
                <div className="list--title">Volume Transacted</div>
                <div className="list--title">Prediction</div>
            </Col>
            <StockCard />
        </Row>
    );
}

export default StockList;