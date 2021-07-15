import React from 'react';
import {Col, Row} from "react-bootstrap";
import DashCard from "./DashCard";
import DashTable from "./DashTable";

function DashContent({watchlist, addToWatchlist, removeFromWatchList}) {
    return (
        <>
            <h1>Overview</h1>
            <Row className="mb-4 no-gutters">
                <Col className="col-12">
                    <DashCard />
                </Col>
            </Row>
            <Row className="no-gutters">
                <Col className="col-12">
                    <DashTable stocks={watchlist} addToWatchlist={addToWatchlist} removeFromWatchList={removeFromWatchList} />
                </Col>
            </Row>
        </>
    );
}

export default DashContent;