import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import bitcoin from "../../assets/bitcoin.png";
import ForecastData from "./common/ForecastData";
import CardBlock from "./common/CardBlock";
import ForecastRecommendation from "./common/ForecastRecommendation";

function Details({dashboard}) {
    return (
        <div className="section details">
            <Row className="no-gutters justify-content-center">
                <Col className={`d-flex align-items-center mb-5 ${dashboard === "true" ? "col-12 col-sm-8 col-md-6" : "col-11 col-sm-7 col-md-8"}`}><Image src={bitcoin} /> <h2>Bitcoin (BTC)</h2></Col>
                <Col className={`d-flex justify-content-start justify-content-sm-end mb-5 ${dashboard === "true" ? "col-12 col-sm-4 col-md-6" : "col-11 col-sm-4 col-md-3"}`}><button className="btn btn-primary mr-3">Add to Portfolio</button> <button className="btn btn-secondary">Remove from Watch List</button></Col>
            </Row>
            <Row className="no-gutters justify-content-center">
                <Col className={`${dashboard === "true" ? "col-12 col-xl-5" : "col-11 col-xl-5"}`}>
                    <Row className="no-gutters">
                        <Col className="col-6">
                            <CardBlock price="true" />
                        </Col>
                        <Col className="col-6">
                            <CardBlock change="true" />
                        </Col>
                        <ForecastRecommendation />
                    </Row>
                </Col>
                <ForecastData dashboard={dashboard} />
            </Row>
            <Row className="no-gutters justify-content-center">
                <Col className={`${dashboard === "true" ? "col-12" : "col-11"}`}>
                    GRAPH HERE
                </Col>
            </Row>
        </div>
    );
}

export default Details;
