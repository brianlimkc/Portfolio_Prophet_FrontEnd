import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Footer from "../../website/common/Footer";
import DashCard from "./DashCard";
import DashTable from "./DashTable";

function DashContent() {
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
                    <DashTable />
                </Col>
            </Row>
        </>
    );
}

export default DashContent;