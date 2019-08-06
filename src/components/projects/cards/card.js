import React from 'react'
import { Card, CardText, CardActions, Button, CardMenu, IconButton } from "react-mdl";
import "./card.css";

const Cards = props => {
    return (
        <div className='container'>
            <Card shadow={20} style={{ width: '512px', margin: 'auto' }}>
                
                <img src={props.imgSrc} alt='card images' className='card-Img' />
                <CardActions border>
                    <Button colored>{props.name}</Button>
                </CardActions>
                <CardText>
                    {props.text}
                </CardText>
                <CardMenu style={{ color: '#fff' }}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
        </div>
    )
}


export default Cards