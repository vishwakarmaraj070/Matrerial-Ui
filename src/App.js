import React from "react";
import Home from "./Pages/Home";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import { createMuiTheme } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[700]
        }
    }
});

function App() {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <Router>
                    <Switch>
                        <Route path="/ui" component={Home} />
                        <Route path="/" render={() => <Redirect to="/ui" />} />
                    </Switch>
                </Router>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;
