import React, {useEffect, useState} from 'react';
import Banner from "./common/Banner";
import StockList from "./common/StockList";

function Home({stocks}) {

    let [topFive, setTopFive] = useState([])

    let fiveStocks = []
    useEffect(()=>{
        if(stocks){
            fiveStocks = [...stocks].sort((a, b)=>{
                return b.yhat_30_ratio - a.yhat_30_ratio
            }).slice(0,5)
            setTopFive(fiveStocks)
        }
    },[stocks])

    return (
        <>
            <Banner />
            <StockList stocks={topFive} />
        </>
    );
}

export default Home;