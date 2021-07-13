import React from 'react';
import {Col} from "react-bootstrap";

function ForecastData({dashboard, forecastData}) {

    return (
        <Col className={`mb-4 ${dashboard === "true" ? "col-12 col-xl-7" : "col-11 col-xl-6"}`}>
            <div className="d-flex flex-column card-block pr-0 pl-xl-3 pl-0">
                <div className="list--title">Forecast Data</div>
                <div className="card forecast-data-table list--value mr-0">
                    <table id="forecastTable">
                        <thead>
                        <tr>
                            <td>Date/Time</td>
                            <td>Yhat</td>
                            <td>Yhat_Lower</td>
                            <td>Yhat_Upper</td>
                        </tr>
                        </thead>
                        <tbody>
                        {forecastData.map((row, index)=>(
                            <tr key={index}>
                                <td data-label="Date/Time">{row.date}</td>
                                <td data-label="Yhat">{row.yhat}</td>
                                <td data-label="Yhat_Lower">{row.yhat_lower}</td>
                                <td data-label="Yhat_Upper">{row.yhat_upper}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Col>
    );
}

export default ForecastData;