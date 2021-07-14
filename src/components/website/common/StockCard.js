import React from 'react';
import {Image, Nav} from "react-bootstrap";
import bitcoin from "../../../assets/bitcoin.png";
import {NavLink} from "react-router-dom";

function StockCard({stockDetails}) {
    return (
        <NavLink to={`/market/details/${stockDetails.symbol}`} className="watchlist card col-11 d-flex flex-row">
            <div className="watchlist--content d-flex align-items-center">
                {/*<div><Image src={bitcoin} /></div>*/}
                <div>{stockDetails.symbol}</div>
                <div className="full-name">{stockDetails.name}</div>
            </div>
            <div className="watchlist--content">${stockDetails.currentPrice}</div>
            <div className={`watchlist--content ${(stockDetails.price_change.toString().charAt(0) == "-") ? "red" : "green"}`}>{stockDetails.percent_change}%</div>
            <div className="watchlist--content">{stockDetails.volume}</div>
            <div className={`watchlist--content  ${stockDetails.yhat_30_advice == "BUY" && "green"} ${stockDetails.yhat_30_advice == "HOLD" && "orange"}  ${stockDetails.yhat_30_advice == "SELL" && "red"}`}>{stockDetails.yhat_30_advice}</div>
        </NavLink>
    );
}

export default StockCard;