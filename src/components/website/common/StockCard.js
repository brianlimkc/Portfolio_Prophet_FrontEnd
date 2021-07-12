import React from 'react';
import {Image} from "react-bootstrap";
import bitcoin from "../../../assets/bitcoin.png";

function StockCard() {
    return (
        <a href="#" className="watchlist card col-11 d-flex flex-row">
            <div className="watchlist--content d-flex align-items-center">
                <div><Image src={bitcoin} /></div>
                <div>BTC</div>
                <div className="full-name">Bitcoin</div>
            </div>
            <div className="watchlist--content">$300.92</div>
            <div className="watchlist--content red">-0.23%</div>
            <div className="watchlist--content">9829029.239</div>
            <div className="watchlist--content orange">Hold</div>
        </a>
    );
}

export default StockCard;