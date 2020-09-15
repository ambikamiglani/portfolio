import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './components/Home/Home';
import ArtHome from './components/Galleries/ArtHome';
import PortfolioPage from './components/Portfolio/PortfolioPage';
import ProductHome from './components/Galleries/ProductHome'; 
import CodingHome from './components/Galleries/CodingHome' ;
import WritingHome from './components/Galleries/WritingHome'; 
import About from './components/Galleries/About'; 

function Main() {
    return (
    <Switch>
        <Route exact path='/' component={Home}/> 
        <Route exact path='/art' component={ArtHome}/>
        <Route exact path='/art/:artId' component={PortfolioPage}/>
        <Route exact path='/product' component={ProductHome}/>
        <Route exact path='/product/:productId' component={PortfolioPage}/>
        <Route exact path='/coding' component={CodingHome}/>
        <Route exact path='/writing' component={WritingHome}/>
        <Route exact path='/about' component={About}/>
        {/* <Route exact path ='coding' component={CodingHome}/> */} 
    </Switch>
);
    } 

export default Main;
