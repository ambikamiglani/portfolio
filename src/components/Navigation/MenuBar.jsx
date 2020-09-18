import React from 'react';
// import './MenuBar.css'; 
import Bootstrap from 'react-bootstrap'; 
import {Container, Col, Row, Nav, NavItem} from 'react-bootstrap'; 

class MenuBar extends React.Component{ 
    constructor(props){ 
        super(props); 
        this.state = { 
        }

    }

    render(){ 
        return(
            <Container className = 'ArtHome'>  
                <Col className = "MenuBar" > 
                    <Nav className="flex-column" fixed="top">
                        <Nav.Link href="/">HOME</Nav.Link>
                        <Nav.Link href="/art">ART</Nav.Link>
                        <Nav.Link href="/product">PRODUCT</Nav.Link>
                        <Nav.Link href="/coding">CODING</Nav.Link>
                        <Nav.Link href="/writing">WRITING</Nav.Link>
                        <Nav.Link href="/about">ABOUT</Nav.Link>
                        {/* <Nav.Link id="play">PLAY</Nav.Link> */}

                    </Nav>
                </Col> 
            </Container> 
            // </div>
        );
    }

}

export default MenuBar; 