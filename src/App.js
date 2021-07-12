import {Container} from "react-bootstrap";
import Footer from "./components/website/common/Footer";
import Navigation from "./components/website/common/Navigation";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/website/Home";
import Market from "./components/website/Market";
import Details from "./components/website/Details";

function App() {
  return (
    <BrowserRouter>
        <Navigation />
        <Container fluid className="px-0">
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/market" exact>
                    <Market />
                </Route>
                <Route path="/details/:stockID">
                    <Details />
                </Route>
            </Switch>
        </Container>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
