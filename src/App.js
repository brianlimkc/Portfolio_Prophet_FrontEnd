import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Website from "./components/website/Website";
import Dashboard from "./components/dashboard/Dashboard";
import {useState} from "react";


function App() {
    let [auth, setAuth] = useState(false)

  return (
    <BrowserRouter>
        <Switch>
            <PrivateRouter path="/dashboard" auth={auth}>
                <Dashboard setAuth={setAuth} />
            </PrivateRouter>
            <Route path="/">
                <Website setAuth={setAuth} />
            </Route>
        </Switch>
    </BrowserRouter>
  );
}

function PrivateRouter({auth, children, path, location, ...rest}){
    return (
        <>
            {(auth) ?
                <Route path={path} auth={auth} {...rest}>
                    {children}
                </Route> : <Redirect to={{
                    pathname: "/login",
                    state: {from: location}
                }}/>
            }
        </>
    )
}

export default App;
