import React, { Component } from 'react'
import { Grid, Cell } from "react-mdl";
import "./landingPage.css";


class Landing extends Component {
    render() {
        return (
            <div className='container' style ={{width : '100%', margin : 'auto'}}>
                <Grid className='Landing-grid'>
                    <Cell col={12}>
                        <img 
                            src='https://pixabay.com/get/57e8d6444955a914f6da8c7dda793f7f1636dfe2564c704c732b72dc9f4bc751_340.png'
                            alt='avatar'
                            className='avatar-img'
                        />
                    
                        <div className='banner-text'>
                            <h1>Hi, I am Showkat</h1>
                            <h2>& I am a full stake web developer</h2>
                            <hr />
                            <p>
                                || HTML || CSS || JavaScript || React || Redux || React Native ||
                            </p>
                            <p>
                                || Python || Django || Node.js || Express || MongoDB || FireBase ||
                            </p>
                            <div className='social-icon'>
                                <a href='https://www.fb.com/mh.showkat.1' rel='noopener noreferrer' target='blank'>
                                    <i class="fab fa-facebook-square"></i>
                                </a>
                                <a href='https://twitter.com/justshowkat' rel='noopener noreferrer' target='blank'>
                                    <i class="fab fa-twitter-square" aria-hidden='true'></i>
                                </a>
                                <a href='https://www.linkedin.com/in/mshowkat/' rel='noopener noreferrer' target='blank'>
                                    <i class="fab fa-linkedin" aria-hidden='true'></i>
                                </a>
                                <a href='https://github.com/mshowkat/' rel='noopener noreferrer' target='blank'>
                                    <i class="fab fa-github" aria-hidden='true'></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing