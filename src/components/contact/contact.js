import React, { Component } from 'react'
import { Grid, Cell } from "react-mdl";
import "./contact.css";
import DP from "../../img/000.jpg";

class Contact extends Component {
    render() {
        return (
            <div className='contact-container'>
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Hey, this is me</h2>
                        <img 
                            src={DP} 
                            style={{height: "300px"}}
                            alt='avatar' 
                        />
                        <h4>Tell me, how can I help?</h4>
                    </Cell>
                    <Cell col={6}>
                        <h1>Contact Me</h1>
                        <hr/>
                        <div className='contact-list'>
                            <i class="fas fa-envelope"> md.showkat8@gmail.com</i>
                            <br/>
                            <i class="fas fa-phone-square"> +88015-2140-1043</i>
                            <br/>
                            <i class="fab fa-skype"> MShowkat </i>
                            <p> *** You can also contact me through Social Media ***</p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact