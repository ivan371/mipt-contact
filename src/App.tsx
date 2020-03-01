import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TicketDetails from "./components/TicketDetails";
import TicketList from "./components/TicketList";
import Layout from "./components/Layout";
import theme from "./theme";
import initStore from "./store";

function App() {
  return (
    <Provider store={initStore()}>
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Switch>
              <Route path="/my" exact>
                <TicketList isCurrent />
              </Route>
              <Route path="/:id" exact>
                <TicketDetails />
              </Route>

              <Route path="/" exact>
                <TicketList />
              </Route>
            </Switch>
          </Layout>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
