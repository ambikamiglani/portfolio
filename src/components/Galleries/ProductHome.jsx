import React from 'react';
import './ArtHome.css'; 
import MenuBar from '../Navigation/MenuBar'; 
import Bootstrap from 'react-bootstrap'; 
import {Container, Col, Row, Nav, NavItem} from 'react-bootstrap'; 
import PortfolioItem from '../Portfolio/PortfolioItem'
import FadeIn from 'react-fade-in';
import * as Constants from "../constants"; 
import iterativeImg from "../Portfolio/img/IterativeDesign01.jpg"; 
import abImg from "../Portfolio/img/ABTesting03.png"; 
import personasImg from "../Portfolio/img/Personas01.jpg"; 


const absummary = Constants.OASIS_SUMMARY; 
const abskills = Constants.HOLITION_SKILLS; 
const itersummary = Constants.OASIS_SUMMARY; 
const iterskills = Constants.OASIS_SKILLS; 


const items = [['abtesting', 'A/B Testing', absummary, abskills], ['iterativedesign', 'Iterative Design', itersummary, iterskills]]; 
function ProductHome() { 

    return(            
        <FadeIn transitionDuration={1000} delay={0}>
        <Container className = "ArtHome"> 
                <Row className = "Title"> 
                    <p id="title"> AMBIKA MIGLANI</p>
                </Row> 
                <Row> 
                    <Col className = "MenuBar" md={4}> 
                        <MenuBar/>
                    </Col>  

                    {/* <Col md={8}><Row> */}
                    <Col className="column" md={4}> 
                        <Row className="item" id="r-1-2"> 
                                <PortfolioItem name="iterative" title="ITERATIVE DESIGN AND USER TESTING" source={iterativeImg} description={Constants.ITERATIVE_SUMMARY} skills={Constants.ITERATIVE_SKILLS}/> 
                        </Row> 
                        <Row className="item" id="r-1-2"> 
                                <PortfolioItem name="personas" title="PERSONAS AND STORYBOARDING" source={personasImg} description={Constants.PERSONA_SUMMARY} skills={Constants.PERSONA_SKILLS}/> 
                        </Row> 
                    </Col>
                    <Col className="column" md={4}>
                        <Row className="item"> 
                            <PortfolioItem name="abtesting" title="A/B TESTING" source={abImg} description={Constants.AB_SUMMARY} skills={Constants.AB_SKILLS}/> 
                        </Row>
                    </Col>
                    {/* </Row></Col> */}
                </Row>
        </Container>
        </FadeIn>
    ); 
}

export default ProductHome; 