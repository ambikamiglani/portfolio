import React from 'react';
import './ArtHome.css'; 
import MenuBar from '../Navigation/MenuBar'; 
import Bootstrap from 'react-bootstrap'; 
import {Container, Col, Row, Nav, NavItem} from 'react-bootstrap'; 
import PortfolioItem from '../Portfolio/PortfolioItem'
import FadeIn from 'react-fade-in';
import * as Constants from "../constants"; 
import starsImg from "../Portfolio/img/stars.png"; 
import mapsImg from "../Portfolio/img/Maps.png"; 
import unitunesImg from "../Portfolio/img/Unitunes.png"; 
import sketchyImg from "../Portfolio/img/Sketchy.png"
import tetrisImg from "../Portfolio/img/Tetris.png"; 
import faceImg from "../Portfolio/img/Facefilter.png"; 
import babyImg from "../Portfolio/img/Babyfaceweb.png"; 
import uniTunesPdf from "../Portfolio/img/UniTunesDemo.pdf"; 
import faceFilterPdf from "../Portfolio/img/FaceFilter.pdf"; 
import graphImg from "../Portfolio/img/Graph.png";
import graphPdf from "../Portfolio/img/graph.pdf";  

function CodingHome() { 
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
                            <PortfolioItem name="http://cs.brown.edu/courses/cs0320/projects/stars.html" title="STARS" source={starsImg} description={Constants.STARS_SUMMARY} skills={Constants.STARS_SKILLS}/> 
                    </Row> 
                    <Row className="item" id="r-1-2"> 
                            <PortfolioItem name="http://cs.brown.edu/courses/cs0320/projects/maps.html" title="MAPS" source={mapsImg} description={Constants.MAPS_SUMMARY} skills={Constants.MAPS_SKILLS}/> 
                    </Row> 
                    <Row className="item" id="r-1-2"> 
                            <PortfolioItem name="https://cs.brown.edu/courses/cs015/docs/assignments/TetrisHandout2019.pdf" title="TETRIS" source={tetrisImg} description={Constants.TETRIS_SUMMARY} skills={Constants.TETRIS_SKILLS}/> 
                    </Row> 
                    <Row className="item"> 
                            <PortfolioItem name="https://cs.brown.edu/courses/cs015/docs/assignments/Sketchy_Handout_2019.pdf" title="SKETCHY" source={sketchyImg} description={Constants.SKETCHY_SUMMARY} skills={Constants.SKETCHY_SKILLS}/> 
                    </Row>

                    </Col>
                    <Col className="column" md={4}>
                        <Row className="item"> 
                            <PortfolioItem name={uniTunesPdf} title="UNITUNES" source={unitunesImg} description={Constants.UNITUNES_SUMMARY} skills={Constants.UNITUNES_SKILLS}/> 
                        </Row>
                        <Row className="item" id="r-1-2"> 
                            <PortfolioItem name="http://babyface.media/" title="BABYFACE WEBSITE" source={babyImg} description={Constants.BABYWEB_SUMMARY} skills={Constants.BABYWEB_SKILLS}/> 
                         </Row> 
                        <Row className="item" id="r-1-2"> 
                            <PortfolioItem name={faceFilterPdf} title="FACE FILTER" source={faceImg} description={Constants.FACEFILTER_SUMMARY} skills={Constants.FACEFILTER_SKILLS}/> 
                        </Row> 
                        <Row className="item" id="r-1-2"> 
                            <PortfolioItem name={graphPdf} title="GRAPH" source={graphImg} description={Constants.GRAPH_SUMMARY} skills={Constants.GRAPH_SKILLS}/> 
                        </Row> 
                    </Col>
                </Row>
        </Container>
        </FadeIn>
    ); 
}

export default CodingHome; 