import React from 'react';

function CardBlock({stockDetail, change, price}) {
    return (
        <div
            className={`d-flex flex-column card-block ${change === "true" && "pl-lg-3 pl-0 pr-lg-3 pr-0"} ${price === "true" && "pr-lg-3 pr-0 pl-0"}`}>
            <div className="list--title">{change === "true" && "% Change"}{price === "true" && "Current Price"}</div>
            {change === "true" && <div
                className={`card list--value ${(stockDetail.price_change && stockDetail.price_change.toString().charAt(0) === "-") ? "red" : "green"}`}>
                {stockDetail.percent_change + "%"}
            </div>}
            {price === "true" && <div className={`card list--value`}>
                {"$" + stockDetail.currentPrice}
            </div>
            }
        </div>
    );
}

export default CardBlock;