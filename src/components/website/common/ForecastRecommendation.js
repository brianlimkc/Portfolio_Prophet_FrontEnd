import React from 'react';
import {Col} from "react-bootstrap";

function ForecastRecommendation({stockDetail}) {
    return (
        <Col className="col-12 mt-4 d-flex forecast mb-4 pr-xl-3 pr-0">
            <div className="forecast--title list--title">30 Day Forecast</div>
            <div className="forecast--title d-flex">
                <div className="list--title">Range</div>
                <div className="list--title">Price</div>
                <div className="list--title">% Change</div>
            </div>
            <div className="d-flex card flex-row align-items-center">
                <div className={`list--value recommendation-forecast ${stockDetail.yhat_30_advice == "BUY" && "green"} ${stockDetail.yhat_30_advice == "HOLD" && "orange"}  ${stockDetail.yhat_30_advice == "SELL" && "red"}`}>{stockDetail.yhat_30_advice}</div>
                <div className="forecast--values">
                    <div className="d-flex upper-forecast">
                        <div>Upper</div>
                        <div>{stockDetail.yhat_30_upper}</div>
                        <div className="green">%</div>
                    </div>
                    <div className="d-flex lower-forecast">
                        <div>Lower</div>
                        <div>{stockDetail.yhat_30_lower}</div>
                        <div className="red">%</div>
                    </div>
                </div>
            </div>
        </Col>
    );
}

export default ForecastRecommendation;