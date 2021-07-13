import React from 'react';
import {Col, Form, Row} from "react-bootstrap";
import DashTable from "./common/DashTable";

function Watchlist() {
    return (
        <>
            <h1>Watch List</h1>
            <Row className="mb-4 no-gutters">
                <Col className="col-12">
                    <Form inline>
                        <div className="search-bar search-bar-dash material-icons">
                            <input type="text" placeholder="Search Stocks" />
                        </div>
                    </Form>
                </Col>
            </Row>
            <Row className="no-gutters">
                <Col className="col-12 col-md-6">
                    <DashTable />
                </Col>
                <Col className="col-12 col-md-6">
                    <DashTable />
                </Col>
            </Row>
        </>
    );
}

export default Watchlist;