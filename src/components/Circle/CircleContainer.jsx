import React from 'react';
import "./CircleContainer.css"

class CircleContainer extends React.Component { 
    constructor(props){ 
        super(props); 
    }

    render(){ 
        var animatedStyle; 
        if(this.props.clicked === true){ 
            animatedStyle={ 
                scale:"0.7", 
            }
        }
        return (
            <div className="App-circle" style={this.props.style}> 
            </div>
        ); 
    }
    
}

export default CircleContainer;

// ReactDOM.render(
//     <CircleContainer />, document.getElementById('root')
// ); 

