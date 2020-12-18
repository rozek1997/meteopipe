import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import TopNav from "./components/menu/TopNav";
import App from "./pages/main/App";
import MapContainer from "./pages/map/MapContainer";
import SignUp from "./pages/signup/SignUp";

class Routing extends React.Component {

    render() {
        return (
            <Router>
                <TopNav/>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/home" component={App}/>
                    <Route path="/map" component={MapContainer}/>
                    <Route path="/sign-in" component={SignUp}/>
                    <Route path="/sign-up" component={MapContainer}/>

                </Switch>
            </Router>
        );
    }
}

export default Routing;