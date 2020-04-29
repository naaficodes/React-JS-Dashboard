import React, { Component } from 'react';
import Navitem from './Navitem';
import logo from '../img/logo.jpg';

class Navbar extends Component {
    render() {
        return (
            <div className="sidebar">
                <img src={logo} width="160" alt="activesell logo"></img>
                <ol>
                    <Navitem title="Dashboard" linkurl="/"></Navitem>
                    <Navitem title="People" linkurl="/"></Navitem>
                    <Navitem title="Campaigns" active={true} linkurl="/"></Navitem>
                    <Navitem title="Templates" linkurl="/"></Navitem>
                    <Navitem title="Settings" linkurl="/"></Navitem>
                    
                </ol>
                
            </div>
        )
    }
}

export default Navbar
