import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Website from "./components/website/Website";
import Dashboard from "./components/dashboard/Dashboard";
import {useEffect, useState} from "react";
import {checkAuth} from "../src/lib/checkAuth";

function App() {
    let [auth, setAuth] = useState(false)
    let [loading, setLoading] = useState(true)

    useEffect(()=>{
        let authValue = async() => {
            let a = await checkAuth()
            setAuth(a)
            console.log(a)
            setLoading(false)
        }
        authValue()

    },[])


  return (
    <BrowserRouter>
        <Switch>
            <PrivateRouter path="/dashboard" auth={auth}>
                <Dashboard setAuth={setAuth} auth={auth} />
            </PrivateRouter>
            <Route path="/">
                <Website setAuth={setAuth} />
            </Route>
        </Switch>
    </BrowserRouter>
  );
}

function PrivateRouter({auth, loading, children, path, location, ...rest}){
    if(loading){
        return <div>Loading</div>
    }
    console.log(auth)
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
