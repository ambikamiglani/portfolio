import React from 'react';
import '../Portfolio/PortfolioPage.css'; 
import MenuBar from '../Navigation/MenuBar'; 
import Bootstrap from 'react-bootstrap'; 
import {Container, Col, Row, Nav, NavItem, Image} from 'react-bootstrap'; 
import PortfolioItem from '../Portfolio/PortfolioItem'
import FadeIn from 'react-fade-in';
import * as Constants from "../constants"; 
import ProfilePic from "../Portfolio/img/ambika.png"

function About() { 

    return(            
        <FadeIn transitionDuration={1000} delay={0}>
        <Container className = "PortfolioPage"> 
                <Row className = "Title"> 
                    <p id="title"> AMBIKA MIGLANI</p>
                </Row> 
                <Row> 
                    <Col className = "MenuBar" md={4}> 
                        <MenuBar/>
                    </Col>  
                    
                    <Col className="ContentCol" md={8}> 
                            <Row id="about">
                            <Col md={6}>
                            <Image className="Img" fluid src={ProfilePic} id="profile"></Image>
                            </Col>
                            <Col md={6}>
                            <Row id="profile">
                            <a>Hi! I'm Ambika. I'm currently a Senior at <a href="https://www.brown.edu/" target="_blank">Brown University</a> finishing up my degrees in <a href="https://cs.brown.edu/" target="_blank">Computer Science</a> and <a href="https://www.brown.edu/academics/modern-culture-and-media/about" target="_blank">Modern Culture and Media</a>. 
                            I've spent the past three years exploring CS as a partner for art and communication, with my work at <a href="https://cs.brown.edu/" target="_blank">Holition</a> affirming my passion for it. 
                            Computer Science and digital media art are such a huge fields and, in my opinion, are at their most transformative state when combined with other disciplines. 
                            I'm currently working on a project called 'Decrypted By Us', a  project to make technical education more accessible to minority groups, 
                            and am leading an interdisciplinary team in <a href="https://www.ivyfilmfestival.org/" target="_blank">Ivy Film Festival's</a> New Media 
                            department to create virtual experiences to guide visitors through a history of filmmaking. In my spare time I like to make music videos,
                            <a href="http://babyface.media/" target="_blank"> websites to showcase those music videos </a>, and lots of tea! 
                            Email me and I'd be happy to talk about any one of these things, or anything else!
                            </a>
                            </Row>
                            <Row id="contact">
                              <li>Email: ambika_miglani@brown.edu</li>
                              <li>Linkedin: <a href="https://www.linkedin.com/in/ambika-miglani-031694173/" target="_blank">ambika-miglani</a> </li>
                              <li>Instagram: @ambika-miglani</li>
                            </Row>
                            </Col>
                            </Row>
                    </Col>
                </Row>
        </Container>
        </FadeIn>
    ); 
}

export default About; 