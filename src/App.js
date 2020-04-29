import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Titleandbutton from './components/Titleandbutton';
import Bread from './components/Bread';
import Modal from './components/Modal';
import Stepscontent from './components/Stepscontent';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      modalactive:false,
      // current step number
      curstep:0,
      stepsdone:0,
      //people list generated from csv file
      step1selection:'',
      step2selection:'',
      peoplelist:'',
      stepscontent:''
      
    }
  }
  
  nextmodel=(x)=>{
    // console.log(x);
   if(x===1)
   {
     this.setState({
       
       modalactive:true,
       curstep:1
     })
   }
   else if(x===0)
   {
    this.setState({
      modalactive:true,
      curstep:0
    })
   }
   else if(!(this.state.stepsdone==this.state.curstep))
   {
    this.setState({
      modalactive:true,
    })
   }
   else if(this.state.stepsdone==this.state.curstep)
   {
    this.setState({
      modalactive:true,
      curstep:this.state.curstep+1
    })
   }
  }

  stepback=()=>{
    this.setState({
      curstep:this.state.curstep-1,
      stepscontent:this.state.stepscontent-1,
      stepsdone:(this.state.stepsdone===0?0:this.state.stepsdone-1),
      modalactive:true,
    })
  }

  markasdone=(x,y)=>
  {
    this.setState({
      stepsdone:x
    });

    if(x===1)
    {
      this.setState({
        step1selection:y
      });
    }
    if(x===2)
    {
      this.setState({
        step2selection:y
      });
    }
    if(x===3)
    {
      this.setState({
        peoplelist:y
      });
    }
    this.showstep(x)
  }

  closemodel=()=>{
    this.setState({
      modalactive:false,
    })
  }

showstep=(x)=>{
  if(x<=this.state.curstep)
  {this.setState({
    stepscontent:x
  })}

  if(this.state.curstep===0)
  {
    this.setState({
      modalactive:true,
      curstep:0
    }) 
  }
}
  componentDidMount=()=>{
    this.setState({modalactive:true,curstep:0},()=>{});
  }
  render() {
    return (
      <div className="app">
        <Router>
        <Navbar/>
        
        <div className="maincon">

          <Route exact path="/">
          {this.state.modalactive?<Modal curstep={this.state.curstep} nextstep={this.nextmodel} closemodel={this.closemodel} markasdone={this.markasdone}/>:null}
          <Titleandbutton title="Campaigns" nextstep={this.nextmodel} stepback={this.stepback} curstep={this.state.stepsdone}></Titleandbutton>
          <Bread markasdone={this.state.stepsdone} showstep={this.showstep}/>
          <Stepscontent steptoshow={this.state.stepscontent} pstate={this.state} />
          
          </Route>

          {/* <Route exact path="/people">
          <Titleandbutton title="People" ></Titleandbutton>
          </Route> */}
        </div>
        </Router>
      </div>
    )
  }
}

export default App
