import React, { Component } from 'react';
import Createcampaign from './ModalContents/Createcampaign';
import Templates from './ModalContents/Templates';
import Timezones from './ModalContents/Timezones';
import Importcsv from './ModalContents/Importcsv';

class Modal extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            contentToRender:0,
            modaltitle:''
        }
    }
// componentDidMount=()=>{
//     this.setState({
//         contentToRender:
//     })
// }

componentWillMount=()=>{
    this.setState({
        contentToRender:this.props.curstep
    })
}
nextstep=(x)=>{
    this.props.nextstep(x);
    this.setState({
                contentToRender:x
            })
}
markasdone=(x,y='')=>{
    y=y.length>0?y:'';
    this.props.markasdone(x,y);
    this.props.closemodel();
}

settitle=(x)=>
{
    console.log(x)
    this.setState({
        modaltitle:x
    })
}
    render() {
        return (
            <div className="cmodal" >
                <div className="modalbox">
                    <span className="cross" onClick={this.props.closemodel}>X</span>
        <section className="modaltitle">{this.state.modaltitle}</section>
        {this.state.contentToRender===0?<Createcampaign nextstep={this.nextstep} settitle={this.settitle}/>:""}
        {this.state.contentToRender===1?<Templates markasdone={this.markasdone} settitle={this.settitle}/>:""}
        {this.state.contentToRender===2?<Timezones markasdone={this.markasdone} settitle={this.settitle}/>:""}
        {this.state.contentToRender===3?<Importcsv markasdone={this.markasdone} settitle={this.settitle}/>:""}
                </div>
               
            </div>
        )
    }
}

export default Modal
