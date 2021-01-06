import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import TopNav from "./components/menu/TopNav";
import App from "./pages/main/App";
import Devices from "./pages/devices/Devices";
import MapContainer from "./pages/map/DevicesMapPage";
import AuthPage from "./pages/signup/AuthPage";

class Routing extends React.Component {

    render() {
        return (
            <Router>
                <TopNav/>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/home" component={App}/>
                    <Route path="/my-devices" component={Devices}/>
                    <Route path="/map" component={MapContainer}/>
                    <Route path="/sign-in" component={AuthPage}/>
                    <Route path="/sign-up" component={AuthPage}/>
                </Switch>
            </Router>
        );
    }
}

export default Routing;