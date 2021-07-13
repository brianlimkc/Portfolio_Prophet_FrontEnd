import React from 'react';

function CardBlock({stockDetail, change, price}) {
    return (
        <div
            className={`d-flex flex-column card-block ${change == "true" && "pr-xl-3 pr-0"} ${price == "true" && "pl-xl-3 pl-0"}`}>
            <div className="list--title">{change == "true" && "% Change"}{price == "true" && "Current Price"}</div>
            {change == "true" && <div
                className={`card list--value ${(stockDetail.price_change && stockDetail.price_change.toString().charAt(0) == "-") ? "red" : "green"}`}>
                {change == "true" && stockDetail.price_change + "%"}
            </div>}
            {price == "true" && <div className={`card list--value`}>
                {price == "true" && "$" + stockDetail.currentPrice}
            </div>
            }
        </div>
    );
}

export default CardBlock;