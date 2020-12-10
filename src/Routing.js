import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import TopNav from "./components/menu/TopNav";
import App from "./pages/App";
import MapContainer from "./pages/MapContainer";

class Routing extends React.Component {

    render() {
        return (
            <Router>
                <TopNav/>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/home" component={App}/>
                    <Route path="/map" component={MapContainer}/>
                </Switch>
            </Router>
        );
    }
}

export default Routing;