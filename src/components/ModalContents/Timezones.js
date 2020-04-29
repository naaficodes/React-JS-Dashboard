import React, { Component } from 'react'

class Timezones extends Component {
    componentDidMount=()=>{
        this.props.settitle("Choose Your Timezone")
    }
    render() {
        return (
            <section className="duodiv">
                <div>
                    <ul>
                    <li><button className="blue" onClick={this.props.markasdone.bind(this,2,'Local timezone')}>Local timezone</button></li>
                    <li><button className="blue" onClick={this.props.markasdone.bind(this,2,'New york timezone')}>New york timezone</button></li>
                    <li><button className="blue" onClick={this.props.markasdone.bind(this,2,'London timezone')}>London timezone</button></li>
                    <li><button className="blue" onClick={this.props.markasdone.bind(this,2,'Paris timezone')}>Paris timezone</button></li>
                    <li><button className="blue" onClick={this.props.markasdone.bind(this,2,'S.frans timezone')}>S.frans timezone</button></li>
                    <li><button className="blue" onClick={this.props.markasdone.bind(this,2,'Tokyo timezone')}>Tokyo timezone</button></li>
                    <li><button className="blue" onClick={this.props.markasdone.bind(this,2,'Custom timezone')}>Custom timezone</button></li>
                    <li><button className="blue" onClick={this.props.markasdone.bind(this,2,'Custom timezone')}>Custom timezone</button></li>
                    </ul></div>
                <div></div>
            </section>
        )
    }
}

export default Timezones
