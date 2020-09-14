import React from 'react'
import './PortfolioItem.css'
import {Container, Col, Row, Image} from 'react-bootstrap'; 
import { Link, NavLink } from 'react-router-dom';

class PortfolioItem extends React.Component{ 
    constructor(props){ 
        super(props); 
        this.state = { 
        }
        this.redirect = this.redirect.bind(this); 

    }

    redirect(e, page){ 
        e.preventDefault(); 
        this.props.history.push(page); 
    }

    render(){ 

        var path = window.location.pathname; 
        var image = this.props.source; 
        var redirectLink; 
        if(path ==="/art"){ 
            redirectLink = "/art/"  + this.props.name;
        } else if(path ==="/product"){ 
            redirectLink = "/product/" + this.props.name;  
        } else if(path === "/coding"){ 
            redirectLink = this.props.name; 
        }
        // this.props.intro = "hello!"; 
        return(
            <Container className = 'Item'>  
            <Col> 
                <Row className="ImgContainer">
                    <div className="ImgCover">
                        <Image title={this.props.name} src={this.props.source} className="PreviewImg"  fluid/>
                        <div className="header">
                            <Row className="contentContainer"> 
                                <Col>
                                <Row className="name"> 
                                    {this.props.title}
                                </Row> 
                                <Row id="description"> 
                                    {this.props.description} 
                                </Row>
                                <Row id="skills"> 
                                    {this.props.skills}
                                </Row>
                                <Row id="see-more">
                                    <a href={redirectLink} target="_blank">
                                    View Project
                                    </a> 
                                </Row>
                                </Col>
                            </Row> 
                        </div>
                    </div>
                </Row>
            </Col> 
            </Container> 
            // </div>
        );
    }

}

export default PortfolioItem; 
