import React, { Component } from 'react'
import Cards from "./cards/card";
import "./projects.css";
import { Grid, Cell } from "react-mdl";

//import images
import color from "../../img/color.png";
import jsDoc from "../../img/jsDoc.png";
import rest from "../../img/rest.png";
import todo from "../../img/todo.png";

class Projects extends Component {
        state = {
            projects : [
                { id: 1, imgSrc: color, name: 'Color game', text: 'This is a sample javascript project I created for my JavaScript assignment'},
                { id: 2, imgSrc: todo, name: 'To-do application', text: 'This is a sample javascript project with jquery for practice only'},
                { id: 3, imgSrc: jsDoc, name: 'JavaScript Documentation', text: 'In this project I tried to cover the main Javascript topics and it was made with vanilla javascipt'},
                { id: 4, imgSrc: rest, name: 'REST API', text: "this is a simple REST API documentation for learning purpose. It's quite helpful...."},
            ]
        }
    render() {
        return (
            <div className='container'>
                <Grid className="grid">
                        <Cell col={1} key={this.state.projects.id}>
                            <Cards projects={this.state.projects} />
                        </Cell>
                    
                </Grid>
            </div>
        )
    }
}

export default Projects