import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {Button, Form, Modal} from "react-bootstrap";
import Axios from "../../../lib/Axios"
import AddStockModal from "./AddStockModal";

function DashTable({stocks, recoStocks, watchList, addToWatchlist, removeFromTable}) {
    const [show, setShow] = useState(false);
    const [stockToAdd, setStockToAdd] = useState({})
    function handleShow(e){
        let stockObj = {
            "id": e.target.getAttribute("id"),
            "name": e.target.getAttribute("name"),
            "symbol": e.target.getAttribute("symbol"),
            "price": e.target.getAttribute("price"),
        }
        setStockToAdd(stockObj)
        setShow(true);
    }

    return (
        <>
            <div className="d-flex flex-column dash-card-block">
                <div className="list--title">{recoStocks === "true" ? "Recommended Stocks" : "Watch List" }</div>
                <div className="card forecast-data-table list--value mr-0">
                    <table>
                        <thead>
                        <tr>
                            <td>Name</td>
                            <td>Latest Price</td>
                            <td>% Change</td>
                            <td>Volume Transacted</td>
                            <td>Prediction</td>
                            <td>Actions</td>
                        </tr>
                        </thead>
                        <tbody>
                        {stocks && stocks.map((stock)=>(
                            <tr key={stock.id}>
                                <td data-label="Name">
                                    <NavLink to={`/dashboard/details/${stock.symbol}`}>{stock.symbol}</NavLink></td>
                                <td data-label="Latest Price">${stock.currentPrice}</td>
                                <td data-label="% Change" className={`${(stock.price_change.toString().charAt(0) == "-") ? "red" : "green"}`}>{stock.percent_change}%</td>
                                <td data-label="Volume Transacted">{stock.volume}</td>
                                <td data-label="Prediction" className={`${stock.yhat_30_advice == "BUY" && "green"} ${stock.yhat_30_advice == "HOLD" && "orange"}  ${stock.yhat_30_advice == "SELL" && "red"}`}>{stock.yhat_30_advice}</td>
                                <td>
                                    <span className="material-icons">

                                    <span className="material-icons-outlined"
                                          onClick={() => removeFromTable(stock.id)}>
                                        close
                                    </span>
                                    {recoStocks &&
                                    <span className="material-icons-outlined"
                                          onClick={()=>addToWatchlist(stock.id)}>
                                        playlist_add
                                    </span>}
                                    <span className="material-icons-outlined"
                                          id={stock.id}
                                          symbol={stock.symbol}
                                          name = {stock.name}
                                          price = {stock.currentPrice}
                                          onClick={handleShow}>
                                        add
                                    </span>
                                    <span className="material-icons-outlined">
                                        attach_money
                                    </span>

                                    </span>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <AddStockModal stockToAdd={stockToAdd} setShow={setShow} show={show} />
        </>
    );
}

export default DashTable;
