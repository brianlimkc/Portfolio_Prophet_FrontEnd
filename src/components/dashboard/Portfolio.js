import React, {useEffect} from 'react';
import {Col, Row} from "react-bootstrap";
import DashCard from "./common/DashCard";
import DashTable from "./common/DashTable";
import {checkAuth} from "../../lib/checkAuth";

function Portfolio() {

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
