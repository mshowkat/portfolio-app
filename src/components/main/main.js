import React from 'react'
import { Switch, Route } from "react-router-dom";
import LandingPage from "../landing/landingPage"
import Contact from "../contact/contact";
import Projects from "../projects/projects";

const main = () => {
    return (
        <Switch>
            <Route exact path='/' component={LandingPage}></Route>
            <Route path='/contact' component={Contact}></Route>
            <Route path='/projects' component={Projects}></Route>
        </Switch>
    )
}

export default main
