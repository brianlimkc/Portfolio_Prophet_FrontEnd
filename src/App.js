import {BrowserRouter, Switch, Route} from "react-router-dom";
import Website from "./components/website/Website";
import Dashboard from "./components/dashboard/Dashboard";
import {useEffect, useState} from "react";
import {checkAuth} from "./lib/checkAuth";

function App() {
    let [auth, setAuth] = useState(false)
    useEffect(()=>{
        setAuth(checkAuth())
    },[])

  return (
    <BrowserRouter>
        <Switch>
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/dashboard/portfolio" exact component={Dashboard} />
            <Route path="/dashboard/watchlist" exact component={Dashboard} />
            <Route path="/dashboard/details/:stockID" exact component={Dashboard} />
            <Route path="/dashboard/settings" exact component={Dashboard} />
            <Route path="/" exact component={Website}/>
            <Route path="/market" exact component={Website}/>
            <Route path="/market/details/:stockID" exact component={Website}/>
            <Route path="/login" exact component={Website}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
