import React from 'react'
import { Switch, Route } from "react-router-dom";
import LandingPage from "../landing/landingPage"
import AboutMe from "../aboutMe/aboutMe";
import Contact from "../contact/contact";
import Projects from "../projects/projects";
import Resume from "../resume/resume";

const main = () => {
    return (
        <Switch>
            <Route exact path='/' component={LandingPage}></Route>
            <Route path='/about' component={AboutMe}></Route>
            <Route path='/contact' component={Contact}></Route>
            <Route path='/projects' component={Projects}></Route>
            <Route path='/resume' component={Resume}></Route>
        </Switch>
    )
}

export default main
