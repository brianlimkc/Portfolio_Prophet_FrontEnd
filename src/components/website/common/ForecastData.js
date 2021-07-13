import React from 'react';
import {Col} from "react-bootstrap";

function ForecastData({dashboard}) {
    return (
        <Col className={`${dashboard === "true" ? "col-12 col-xl-7" : "col-11 col-xl-6"}`}>
            <div className="d-flex flex-column card-block pr-0 pl-xl-3 pl-0">
                <div className="list--title">Forecast Data</div>
                <div className="card forecast-data-table list--value mr-0">
                    <table>
                        <thead>
                        <tr>
                            <td>Date/Time</td>
                            <td>Trend</td>
                            <td>Yhat_Lower</td>
                            <td>Yhat_Upper</td>
                            <td>Trend_Lower</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td data-label="Date/Time">04-07-2022+08:00:23</td>
                            <td data-label="Trend">3,358.1817</td>
                            <td data-label="Yhat_Lower">2.898.8254</td>
                            <td data-label="Yhat_Upper">3.816.4846</td>
                            <td data-label="Trend_Lower">2.882.5854</td>
                        </tr>
                        <tr>
                            <td data-label="Date/Time">04-07-2022+08:00:23</td>
                            <td data-label="Trend">3,358.1817</td>
                            <td data-label="Yhat_Lower">2.898.8254</td>
                            <td data-label="Yhat_Upper">3.816.4846</td>
                            <td data-label="Trend_Lower">2.882.5854</td>
                        </tr>
                        <tr>
                            <td data-label="Date/Time">04-07-2022+08:00:23</td>
                            <td data-label="Trend">3,358.1817</td>
                            <td data-label="Yhat_Lower">2.898.8254</td>
                            <td data-label="Yhat_Upper">3.816.4846</td>
                            <td data-label="Trend_Lower">2.882.5854</td>
                        </tr>
                        <tr>
                            <td data-label="Date/Time">04-07-2022+08:00:23</td>
                            <td data-label="Trend">3,358.1817</td>
                            <td data-label="Yhat_Lower">2.898.8254</td>
                            <td data-label="Yhat_Upper">3.816.4846</td>
                            <td data-label="Trend_Lower">2.882.5854</td>
                        </tr>
                        <tr>
                            <td data-label="Date/Time">04-07-2022+08:00:23</td>
                            <td data-label="Trend">3,358.1817</td>
                            <td data-label="Yhat_Lower">2.898.8254</td>
                            <td data-label="Yhat_Upper">3.816.4846</td>
                            <td data-label="Trend_Lower">2.882.5854</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Col>
    );
}

export default ForecastData;