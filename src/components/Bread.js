import React, { Component } from 'react';
import BreadItem from './BreadItem';




class Bread extends Component {
    constructor(props){
        super(props);
        this.state={
            stepcompleted:["0"],
            laststep:0
        }

    }
    activatestep(){
        
        this.state.stepcompleted.forEach((step)=>{
            if((step!=="")&&(step!=="0"))
            document.getElementById(step).classList.add('complete');
        })
        // for(let i=0;i<=this.state.laststep;i++)
        // {
        //     console.log(i)
        //     if(!(i.toString()==='0'))
        //     document.getElementById(i.toString()).classList.add('complete');
        // }
    }
    deactivatestep(){
        document.getElementById(this.state.laststep.toString()).classList.remove('complete'); 
    }
    componentWillReceiveProps(nextprops){
        let stepcompleted=this.state.stepcompleted
        if(!stepcompleted.includes(nextprops.markasdone.toString()))
        {
            stepcompleted.push(nextprops.markasdone.toString());
        }
        
        if(this.state.laststep > nextprops.markasdone)
        {
            this.deactivatestep()
            stepcompleted.pop()
        }
        
        this.setState({
            stepcompleted,
            laststep:nextprops.markasdone
        })
        this.activatestep()
    }
    componentDidMount(){
        this.activatestep()
    }

    showstep=(x)=>{
        // console.log(x);
        this.props.showstep(x)
    }

    render() {
        return (
            <nav className="longbar">
            <ol className="bread">
            <BreadItem step="Sequence" showstep={this.showstep} id="1"/>
            <BreadItem step="Schedule" showstep={this.showstep} id="2"/>
            <BreadItem step="People" showstep={this.showstep} id="3"/>
            <BreadItem step="Settings" showstep={this.showstep} id="4"/>
            <BreadItem step="Review" showstep={this.showstep} id="5"/>
            </ol>
            </nav>
        )
    }
}

export default Bread
