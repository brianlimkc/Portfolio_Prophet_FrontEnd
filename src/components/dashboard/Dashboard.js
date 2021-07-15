import React, {useEffect, useState} from 'react';
import SideNavigation from "./common/SideNavigation";
import DashContent from "./common/DashContent";
import {Route} from "react-router-dom";
import Portfolio from "./Portfolio";
import Watchlist from "./Watchlist";
import {Container} from "react-bootstrap";
import Details from "../website/Details";
import Settings from "./Settings";
import Axios from '../../lib/Axios'
import {checkAuth} from "../../lib/checkAuth";

function Dashboard({setAuth, auth}) {

    let [allStocks, setAllStocks] = useState([])

    useEffect(()=>{
        async function getStocks() {
            let {data} = await Axios.get("/api/show_all/")
            setAllStocks(data["stock_record_all"])
        }
        getStocks()
    },[])

    let [watchlist, setWatchList] = useState([])

    async function getWatchlist(){
        let {data} = await Axios.get('/api/watchlist/')
        setWatchList(data["watchlist_stocks"])
    }

    async function addToWatchlist(stock_id){
        let {data} = await Axios.post('/api/watchlist/', {"id": stock_id})
        getWatchlist()
    }

    async function removeFromWatchList(stock_id){
        let {data} = await Axios.post(`/api/watchlist_delete/`, {"id": stock_id})
        getWatchlist()
    }

    useEffect(()=>{
        getWatchlist()
    },[auth])

    return (
        <div className="dashboard-container">
            <SideNavigation setAuth={setAuth} />
            <Container fluid className="px-0 dashboard-content">
                <Route path="/dashboard" exact>
                    <DashContent watchlist={watchlist} addToWatchlist={addToWatchlist} removeFromWatchList={removeFromWatchList} />
                </Route>
                <Route path="/dashboard/portfolio" exact>
                    <Portfolio />
                </Route>
                <Route path="/dashboard/watchlist">
                    <Watchlist watchlist={watchlist} addToWatchlist={addToWatchlist} removeFromWatchList={removeFromWatchList} allStocks={allStocks} />
                </Route>
                <Route path="/dashboard/details/:symbol">
                    <Details auth={auth} watchlist={watchlist} addToWatchlist={addToWatchlist} removeFromWatchList={removeFromWatchList} />
                </Route>
                <Route path="/dashboard/settings">
                    <Settings />
                </Route>
            </Container>
        </div>
    );
}

export default Dashboard;
