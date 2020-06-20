import React, { Component, Fragment } from "react";


//appstyle
import "appRoot/styles/app.css"


import { HashRouter as Router, Route, Switch } from "react-router-dom";
// views

import HomeView from "appRoot/views/home"
import ProfileView from "appRoot/views/profile"

export default class app extends Component {
    render() {
        return (
            <Router hashType="hashbang">
                <Switch>

                    <Route exact path="/" component={HomeView} />
                    <Route exact path="/profile" component={ProfileView} />
                    <Route render={() => { return "Not Found" }} />
                </Switch>

            </Router>
        );
    }
}