import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main/main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header title="Title" className='header-color' scroll>
          <Navigation className='social'>
            <a href='https://www.linkedin.com/in/mshowkat/' rel='noopener noreferrer' target='blank'>
              <i class="fab fa-linkedin" aria-hidden='true'></i>
            </a>
            <a href='https://github.com/mshowkat/' rel='noopener noreferrer' target='blank'>
              <i class="fab fa-github" aria-hidden='true'></i>
            </a>
            <a href='https://www.fb.com/mh.showkat.1' rel='noopener noreferrer' target='blank'>
              <i class="fab fa-facebook-square"></i>
            </a>
            <a href='https://twitter.com/justshowkat' rel='noopener noreferrer' target='blank'>
              <i class="fab fa-twitter-square" aria-hidden='true'></i>
            </a>
          </Navigation>
        </Header>
        <Drawer title="Title">
          <Navigation>
            <Link to= "/">Home</Link>
            <Link to="/about">About me</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact Me</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
