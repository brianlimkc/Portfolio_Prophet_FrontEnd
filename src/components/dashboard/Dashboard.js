
import {useHistory} from "react-router-dom";
import React, {useEffect, useState} from 'react';
import SideNavigation from "./common/SideNavigation";
import DashContent from "./common/DashContent";
import {Route} from "react-router-dom";
import Portfolio from "./Portfolio";
import Watchlist from "./Watchlist";
import {Container} from "react-bootstrap";
import Details from "../website/Details";
import Settings from "./Settings";
import axios from '../../lib/Axios'
import {checkAuth} from "../../lib/checkAuth";


function Dashboard({auth, setAuth}) {
    const history = useHistory()
    useEffect(()=>{
        setAuth(checkAuth())

        if (!auth) {
            history.push('/login')
        }

    },[])

    let [allStocks, setAllStocks] = useState([])

    useEffect(()=>{
        async function getStocks() {
            let {data} = await axios.get("/show_all")
            setAllStocks(data["stock_record_all"])
        }
        getStocks()
    },[])

    return (
        <div className="dashboard-container">
            <SideNavigation />
            <Container fluid className="px-0 dashboard-content">
                <Route path="/dashboard" exact>
                    <DashContent />
                </Route>
                <Route path="/dashboard/portfolio" exact>
                    <Portfolio />
                </Route>
                <Route path="/dashboard/watchlist">
                    <Watchlist allStocks={allStocks} />
                </Route>
                <Route path="/dashboard/details/:symbol">
                    <Details dashboard="true" />
                </Route>
                <Route path="/dashboard/settings">
                    <Settings />
                </Route>
            </Container>
        </div>
    );
}

export default Dashboard;
