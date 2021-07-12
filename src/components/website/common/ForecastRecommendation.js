import React from 'react';
import {Col} from "react-bootstrap";

function ForecastRecommendation() {
    return (
        <Col className="col-12 mt-4 d-flex forecast mb-4 pr-xl-3 pr-0">
            <div className="forecast--title list--title">30 Day Forecast</div>
            <div className="forecast--title d-flex">
                <div className="list--title">Range</div>
                <div className="list--title">Price</div>
                <div className="list--title">% Change</div>
            </div>
            <div className="d-flex card flex-row align-items-center">
                <div className="list--value recommendation-forecast orange">HOLD</div>
                <div className="forecast--values">
                    <div className="d-flex upper-forecast">
                        <div>Upper</div>
                        <div>105</div>
                        <div className="green">+5.02%</div>
                    </div>
                    <div className="d-flex lower-forecast">
                        <div>Lower</div>
                        <div>98</div>
                        <div className="red">-2.84%</div>
                    </div>
                </div>
            </div>
        </Col>
    );
}

export default ForecastRecommendation;