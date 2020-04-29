import React, { Component } from 'react';
import Sequence from './Steps/Sequence';
import Schedule from './Steps/Schedule';
import People from './Steps/People';

class Stepscontent extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            steptoshow:0
        }
    }
    componentWillReceiveProps(nextprops){
        let steptoshow=nextprops.steptoshow
        this.setState({
            steptoshow
        })
    }
    render() {
        return (
            <div>
                {this.state.steptoshow===1?<Sequence selected={this.props.pstate.step1selection}/>:null}
                {this.state.steptoshow===2?<Schedule selected={this.props.pstate.step2selection}/>:null}
                {this.state.steptoshow===3?<People peoplelist={this.props.pstate.peoplelist}/>:null}
            </div>
        )
    }
}

export default Stepscontent
