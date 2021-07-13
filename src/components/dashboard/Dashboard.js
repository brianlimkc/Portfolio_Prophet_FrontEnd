import React from 'react';
import SideNavigation from "./common/SideNavigation";
import DashContent from "./common/DashContent";
import {Route} from "react-router-dom";
import Portfolio from "./Portfolio";
import Watchlist from "./Watchlist";
import {Container} from "react-bootstrap";
import Footer from "../website/common/Footer";
import Details from "../website/Details";

function Dashboard() {

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
            </Container>
        </div>
    );
}

export default Dashboard;