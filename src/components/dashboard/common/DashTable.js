import React from 'react';

function DashTable() {
    return (
        <div className="d-flex flex-column dash-card-block">
            <div className="list--title">Watch List</div>
            <div className="card forecast-data-table list--value mr-0">
                <table>
                    <thead>
                    <tr>
                        <td>Name</td>
                        <td>Latest Price</td>
                        <td>% Change</td>
                        <td>Volume Transacted</td>
                        <td>Prediction</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td data-label="Name"><a href="#">Bitcoin</a></td>
                        <td data-label="Latest Price">$300.29</td>
                        <td data-label="% Change" className="red">-0.23%</td>
                        <td data-label="Volume Transactedr">9829029.239</td>
                        <td data-label="Prediction" className="orange">HOLD</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DashTable;