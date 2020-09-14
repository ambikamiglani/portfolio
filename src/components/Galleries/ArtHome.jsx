import React from 'react';
import './ArtHome.css'; 
import MenuBar from '../Navigation/MenuBar'; 
import Bootstrap from 'react-bootstrap'; 
import {Container, Col, Row, Nav, NavItem} from 'react-bootstrap'; 
import PortfolioItem from '../Portfolio/PortfolioItem'
import FadeIn from 'react-fade-in';
import * as Constants from "../constants"; 
import oasisImg from '../Portfolio/oasis.jpg'; 
import peggyImg from "../Portfolio/img/peggy.JPG"; 

class ArtHome extends React.Component{ 
    constructor(props){ 
        super(props); 
        this.state = { 
        }

    }

    render(){ 
        // const oasisImg = require("../Portfolio/oasis.jpg"); 
        const peggyImg = require("../Portfolio/img/peggy.JPG")
        const holitionImg = require("../Portfolio/img/holition.png")
        const babyfaceImg = require("../Portfolio/img/babyface.png")
        const chinaImg = require("../Portfolio/img/china.jpg")
        const nuvolnImg = require("../Portfolio/img/nuvoln_video.png")
        const collegeImg = require("../Portfolio/img/college.jpeg")
        const plantsImg = require("../Portfolio/img/watering_plants.png")
 

        return(
            // <div className = 'ArtHome'> 
            <FadeIn transitionDuration={1000} delay={0}>
            <Container className = 'ArtHome'>  
                <Row className = "Title"> 
                    <p id="title"> AMBIKA MIGLANI</p>
                </Row> 
                <Row> 
                    <Col className = "MenuBar" md={4}> 
                        <MenuBar/>
                    </Col>  

                    <Col className="column" md={4}> 
                        <Row className="item" id="r-2-1"> 
                            <PortfolioItem name="soundspace"title="SOUND AS SPACE" source={peggyImg} description={Constants.SOUND_SUMMARY} skills={Constants.SOUND_SKILLS}/> 
                        </Row> 
                        <Row className="item" id="r-1-2"> 
                            <PortfolioItem name="holition" title="HOLITION" source={holitionImg} description={Constants.HOLITION_SUMMARY} skills={Constants.HOLITION_SKILLS}/> 
                        </Row> 
                        {/* <Row className="item" id="r-1-3"> 
                            <PortfolioItem name="plants" title="PLANTS" source={plantsImg}/> 
                        </Row>
                        <Row className="item" id="r-1-4"> 
                            <PortfolioItem name="china" title="CHINA" source={chinaImg}/> 
                        </Row>  */}
                    </Col> 

                    <Col className = "column" md={4}> 
                        <Row className="item" id="r-2-2"> 
                            <PortfolioItem name="babyface" title="BABYFACE WEB" source={babyfaceImg}/> 
                        </Row> 
                        <Row className="item" id="r-1-1"> 
                            {/* <div className="ImgCover"> */}
                                <PortfolioItem name="oasis" title="OASIS" source={oasisImg} description={Constants.OASIS_SUMMARY} skills={Constants.OASIS_SKILLS}/> 
                            {/* </div> */}
                        </Row>

                        {/* <Row className="item" id="r-2-3"> 
                            <PortfolioItem name="nuvoln" title="NUVOLN" source={nuvolnImg}/> 
                        </Row> 
                        <Row className="item" id="r-2-4"> 
                            <PortfolioItem name="collegephoto" title="COLLEGE" source={collegeImg}/> 
                        </Row>  */}
                    </Col> 

                <div> 
                </div> 
                </Row> 
            </Container> 
            </FadeIn>
        );
    }

}

const images = []; 

export default ArtHome; 