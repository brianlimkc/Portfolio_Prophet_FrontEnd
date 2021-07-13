import React, {useEffect} from 'react';
import SideNavigation from "./common/SideNavigation";
import DashContent from "./common/DashContent";
import {Route} from "react-router-dom";
import Portfolio from "./Portfolio";
import Watchlist from "./Watchlist";
import {Container} from "react-bootstrap";
import Details from "../website/Details";
import Settings from "./Settings";
import axios from '../../lib/Axios'

function Dashboard() {
    // useEffect(()=>{
    //     testAuth()
    // },[])
    //
    // // async function testAuth(){
    // //     try{
    // //         let res = await axios.get('/accounts/test_login/')
    // //         console.log(res)
    // //     }catch(e){
    // //         console.log(e)
    // //     }
    // // }

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
                    <Watchlist />
                </Route>
                <Route path="/dashboard/details/:stockID">
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