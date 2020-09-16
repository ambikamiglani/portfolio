import React from 'react';
import './ArtHome.css'; 
import MenuBar from '../Navigation/MenuBar'; 
import Bootstrap from 'react-bootstrap'; 
import {Container, Col, Row, Nav, NavItem} from 'react-bootstrap'; 
import PortfolioItem from '../Portfolio/PortfolioItem'
import FadeIn from 'react-fade-in';
import * as Constants from "../constants"; 
import PerceptionPdf from "../Portfolio/img/Perception.pdf"; 
import perceptionImg from "../Portfolio/img/Ego.png"; 
import remapImg from "../Portfolio/img/Remap.png";
import RemapPdf from "../Portfolio/img/MediaManifesto.pdf"

function WritingHome() { 

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
                    <Col className="column" md={4}> 
                    <Row className="item" id="r-1-2"> 
                            <PortfolioItem name={PerceptionPdf} title="DISTANCE IN VIRTUAL SPACES" source={perceptionImg} description={Constants.PERCEPTION_SUMMARY} skills={Constants.PERCEPTION_SKILLS}/> 
                    </Row> 
                    </Col>
                    <Col className="column" md={4}>
                        <Row className="item"> 
                            <PortfolioItem name={RemapPdf} title="REMAPPING THE MAP" source={remapImg} description={Constants.REMAP_SUMMARY} skills={Constants.REMAP_SKILLS}/> 
                        </Row>
                    </Col>
                </Row>
        </Container>
        </FadeIn>
    ); 
}

export default WritingHome; 