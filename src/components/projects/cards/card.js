import React from 'react'
import { Card, CardText, CardActions, Button, CardMenu, IconButton } from "react-mdl";
import "./card.css";

const Cards = ({projects}) =>{
        const projectList = projects.map( project => (
                <div>
                    <Card shadow={20} style={{ width: '1265px', margin: '20px' }}>

                        <img src={project.imgSrc} alt='card images' className='card-Img' />
                        <CardActions border>
                            <Button colored>{project.name}</Button>
                        </CardActions>
                        <CardText>
                            {project.text}
                        </CardText>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        )
        return (
            <div className='container'>
                {projectList}
            </div>
        )
}


export default Cards