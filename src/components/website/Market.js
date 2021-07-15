import React from 'react';
import StockList from "./common/StockList";

function Market({stocks}) {
    return (
        <StockList stocks={stocks} market="true" />
    );
}

export default Market;