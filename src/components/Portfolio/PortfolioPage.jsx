import React from 'react'
import './PortfolioPage.css'
import {Container, Col, Row, Image} from 'react-bootstrap'; 
import MenuBar from '../Navigation/MenuBar'
import Portfolio from './portfolio.json'; 
import * as Constants from "../constants"; 

class PortfolioPage extends React.Component{ 
    constructor(props){ 
        super(props); 
        this.state = { 
        }

    }

    render(){ 
        var path = window.location.pathname; 
        var pageInfo; 
        var firstImg; 
        var secondImg;  
        var thirdImg; 
        var fourthImg; 
        var fifthImg; 
        var sixthImg; 

        if(path === "/art/oasis"){ 
            pageInfo = Portfolio.Oasis; 
            firstImg = Constants.OASIS_IMG; 
            secondImg = Constants.OASIS_INSPO;  
            thirdImg  = Constants.OASIS_PALETTE; 
            fourthImg = Constants.OASIS_BODIES_2; 
            fifthImg = Constants.OASIS_BODIES; 
            sixthImg = Constants.OASIS_NEXT; 
        } else if(path === "/art/soundspace") { 
            pageInfo = Portfolio.Soundspace; 
            firstImg = Constants.PEGGY_ONE; 
            secondImg = Constants.PEGGY_TWO; 
            thirdImg = Constants.PEGGY_THREE; 
            // fourthImg = Constants.PEGGY_FOUR; 
            fifthImg = Constants.PEGGY_FIVE; 

        } else if(path ==="/product/iterative"){ 
            pageInfo = Portfolio.Iterative; 
            secondImg = Constants.ITER_ONE; 

        } else if(path ==="/product/abtesting"){ 
            pageInfo = Portfolio.AbTesting; 
            secondImg = Constants.AB_ONE; 
        } else if(path ==="/product/personas"){ 
            pageInfo = Portfolio.Personas; 
            secondImg = Constants.PERSONA_ONE; 
        } else if (path ==="/art/babyface"){ 
            pageInfo = Portfolio.Babyface; 
            firstImg = Constants.BABYFACE_ONE; 
            secondImg = Constants.BABYFACE_TWO; 
            fourthImg = Constants.BABYFACE_THREE; 
        } else if (path ==="/art/holition"){ 
            pageInfo = Portfolio.Holition; 
            firstImg = Constants.HOLITION_ONE; 
            secondImg = Constants.HOLITION_TWO;
            thirdImg = Constants.HOLITION_THREE; 
            var video = Constants.HOLITION_FOUR; 
        }

        return(
            <Container className = 'PortfolioPage'>  
            <Col className = "MainCol" > 
                <Row className = "Title"> 
                    <p id="title"> AMBIKA MIGLANI</p>
                </Row> 
                <Row> 
                    <Col className = 'MenuBar' md={4}> 
                        <MenuBar/> 
                    </Col> 
                    <Col className = "ContentCol" md={8}>  
                        <Row className = "ItemRow name">  
                            {pageInfo.title}
                        </Row>
                        <Row className = "ItemRow"> {pageInfo.subtitle} </Row>
                        <Row className = "ItemRow">     
                            <Image src={firstImg} className="Img" rounded fluid/>     
                        </Row> 
                        <Row className = "ItemRow">
                            <h3>Process</h3>
                            {pageInfo.intro}
                        </Row>
                        <Row className = "ItemRow"> 
                            <Image src={secondImg} className ="Img" width="100vw" rounded fluid /> 
                        </Row>
                        <Row className = "ItemRow" > 
                        {pageInfo.text01}
                        </Row> 
                        <Row className = "ItemRow"> 
                            <video className ="ItemRow" src={video} autoplay="true" width="690vw"  ></video>

                            <Image className = "ItemRow" src={thirdImg} fluid translate="-10px"/>
                        </Row> 
                        <Row className = "ItemRow" > 
                        {pageInfo.text02}
                        </Row> 
                        <Row className = "ItemRow"> 
                            <Image className = "Img" src={fourthImg} fluid translate="-10px"/>
                            <Image className = "Img" src={fifthImg} fluid translate="-10px"/>
                        </Row> 
                        <Row className = "ItemRow">
                            <h3>Next Steps</h3>
                            {pageInfo.nextSteps}
                        </Row>
                        <Row className = "ItemRow"> 
                            <Image className = "ItemRow" src={sixthImg} fluid translate="-10px"/>
                        </Row> 

                    </Col> 
                    {/* <Col> 
                        Third col
                    </Col>  */}
                </Row> 
            </Col> 
            </Container> 
        );
    }

}

export default PortfolioPage; 
