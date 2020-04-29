import React, { Component } from 'react'

class Templates extends Component {
    componentDidMount=()=>{
        this.props.settitle("Choose from our templates")
    }
    render() {
        return (
            <section className="duodiv">
                <div>
                    <ul>
                    <li><button className="blue" onClick={this.props.markasdone.bind(this,1,'Get new clients')}>Get new clients</button></li>
                    <li><button className="blue" onClick={this.props.markasdone.bind(this,1,'Convert more visitors')}>Convert more visitors</button></li>
                    <li><button className="blue" onClick={this.props.markasdone.bind(this,1,'Tender for sales')}>Tender for sales</button></li>
                    <li><button className="blue" onClick={this.props.markasdone.bind(this,1,'Video on Emails')}>Video on Emails</button></li>
                    <li><button className="blue" onClick={this.props.markasdone.bind(this,1,'Directs')}>Directs</button></li>
                    <li><button className="blue" onClick={this.props.markasdone.bind(this,1,'Honest and sorry')}>Honest and sorry</button></li>
                    <li><button className="blue" onClick={this.props.markasdone.bind(this,1,'Custom template 1')}>Custom template 1</button></li>
                    <li><button className="blue" onClick={this.props.markasdone.bind(this,1,'Custom template 2')}>Custom template 2</button></li>
                    </ul></div>
                <div></div>
            </section>
        )
    }
}

export default Templates
