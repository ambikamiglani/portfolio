import React from 'react';
import './Home.css'; 
import CircleContainer from '../Circle/CircleContainer'; 
import { Link, NavLink } from 'react-router-dom';
import { withRouter, Redirect } from 'react-router'


class Home extends React.Component{ 
    constructor(props){ 
        super(props); 
        this.state = { 
            isHovered: false, 
            clicked: false, 
            isAnimating: false, 
        }
        this.toggleHover = this.toggleHover.bind(this)
        this.setClicked = this.setClicked.bind(this)
        this.redirectPage = this.redirectPage.bind(this); 

    }


    toggleHover(){ 
        this.setState({isHovered: !this.state.isHovered}); 
    }

    setClicked(e, page){ 
        this.setState({clicked: true}); 
        setTimeout(()=> {this.redirectPage(e, page)}, 300); 
    }

    redirectPage(e, page){ 
        e.preventDefault(); 
        this.props.history.push(page); 
    }
 
    render(){ 
        var backgroundStyle; 
        var circleStyle;
        var linearGradient = "linear-gradient(271deg, #8bfddf, #b0ff97, #efff98, #fe98ff, #ff9998, #ffc698, #fff392, #92ffb8)"; 
        if(this.state.isHovered){ 
            backgroundStyle = {
                background: linearGradient, 
                backgroundSize: "2000% 2000%", 
                WebkitAnimation: "ColourShift 100s ease infinite", 
                Transition: "background, ease", 
            }
            circleStyle={ 
                background: "seashell", 
            }

        } 
        if(this.state.clicked === true){ 
            circleStyle = { 
                background: "white", 
                WebkitAnimation: "CircleScale 1.5s ease", 
                WebkitAnimationFillMode:"forwards", 
            }
            backgroundStyle = {
                background: linearGradient, 
                backgroundSize: "2000% 2000%", 
                WebkitAnimation: "ColourShift 100s ease infinite", 
                Transition: "background, ease", 
            }

            }
        return(             
            <div className="Layout" style={backgroundStyle}>
                <div className="nav-items" id="left">
                    <p id="about"
                        onMouseEnter={this.toggleHover}                        
                        onClick={(e) =>this.setClicked(e, '/about')}
                        onMouseLeave={this.toggleHover}>
                        About
                    </p>
                </div>  
                
                <div className="Home"> 
                    {/* <img id="logo" src={logo}></img> */}
                    <header className="Header" id="row-1"> AMBIKA MIGLANI</header>
                    <CircleContainer 
                        className="Circle" 
                        id="row-2" 
                        style={circleStyle}
                        clicked={this.state.clicked}/>
                </div> 
                <div className="nav-items" id="right">
                <p id="art"
                        onMouseEnter={this.toggleHover}                        
                        onClick={(e)=>this.setClicked(e, '/art')}
                        onMouseLeave={this.toggleHover}
                        >
                        Art
                    </p>
                    <p id="coding"
                        onMouseEnter={this.toggleHover}                        
                        onClick={(e)=>this.setClicked(e, '/coding')}
                        onMouseLeave={this.toggleHover}>
                        Coding
                    </p>
                    <p id="writing"
                        onMouseEnter={this.toggleHover}                        
                        onClick={(e) =>this.setClicked(e, '/writing')}
                        onMouseLeave={this.toggleHover}>
                        Writing
                    </p>
                    <p id="product"
                        onMouseEnter={this.toggleHover}                        
                        onClick={(e) =>this.setClicked(e, '/product')}
                        onMouseLeave={this.toggleHover}>
                        Product
                    </p>
                </div> 
 
            </div>

        );
    } 

}
const HomeWithRouter = withRouter(Home); 


export default Home; 