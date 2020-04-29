import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";

class Titleandbutton extends Component {
    
    render() {
        return (
            <div className="longbar titleandbutton">
                <h2>{this.props.title}</h2>
                <Router>
                    <Route exact path="/">
                <div className="buttons">
                    {this.props.curstep===0?<button className="green" onClick={this.props.nextstep.bind(this,0)}>+ Create Campaign</button>:''}
                    {this.props.curstep!==0?<button className="blue" onClick={this.props.stepback}>Back</button>:''}
                    {this.props.curstep!==0?<button className="green" onClick={this.props.nextstep}>Next</button>:''}
                    
                </div>
                </Route>
                </Router>
            </div>
        )
    }
}

export default Titleandbutton
