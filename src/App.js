import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
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
            <PrivateRouter auth={auth} setAuth={setAuth} path="/dashboard" component={Dashboard} />
            {/*<Route path="/dashboard/portfolio" exact component={Dashboard} />*/}
            {/*<Route path="/dashboard/watchlist" exact component={Dashboard} />*/}
            {/*<Route path="/dashboard/details/:stockID" exact component={Dashboard} />*/}
            {/*<Route path="/dashboard/settings" exact component={Dashboard} />*/}
            <Route path="/" exact component={Website}/>
            <Route path="/market" exact component={Website}/>
            <Route path="/market/details/:symbol" exact component={Website}/>
            <Route path="/login" exact component={Website}/>
        </Switch>
    </BrowserRouter>
  );
}

function PrivateRouter({auth, Component, path, location, ...rest}){
    return (
        <>
            {(auth) ?
                <Route path={path} {...rest}>
                    <Component/>
                </Route> : <Redirect to={{
                    pathname: "/login",
                    state: {from: location}
                }}/>
            }
        </>
    )
}

export default App;
