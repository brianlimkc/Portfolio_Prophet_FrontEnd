import {Container} from "react-bootstrap";
import Footer from "./components/common/Footer";
import Navigation from "./components/common/Navigation";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Market from "./components/Market";

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
              </Switch>
          </Container>
          <Footer />
      </BrowserRouter>
  );
}

export default App;
