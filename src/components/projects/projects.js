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
    render() {
        return (
            <div className='container'>
                <Grid className="grid">
                    <Cell col={6}>
                        <Cards
                            imgSrc={color}
                            name={'Color game'}
                            text={'This is a sample javascript project I created for my JavaScript assignment'}
                        />
                    </Cell>
                    <Cell col={6}>
                        <Cards
                            imgSrc={todo}
                            name={'To-do application'}
                            text={'This is a sample javascript project with jquery for practice only'}
                        />
                    </Cell>
                </Grid>
                <Grid className="grid">
                    <Cell col={6}>
                        <Cards
                            imgSrc={jsDoc}
                            name={'JavaScript Documentation'}
                            text={'In this project I tried to cover the main Javascript topics and it was made with vanilla javascipt'}
                        />
                    </Cell>
                    <Cell col={6}>
                        <Cards
                            imgSrc={rest}
                            name={'REST API'}
                            text={"this is a simple REST API documentation for learning purpose. It's quite helpful...."}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects