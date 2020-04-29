import React, { Component } from 'react'

class createcampaign extends Component {
    componentDidMount=()=>{
        this.props.settitle("Create a Campaign")
    }
    render() {
        return (
            <section className="duodiv">
                
                <div className="mrt40"><button className="blue" onClick={this.props.nextstep.bind(this,1)}>From Template</button></div>
                <div className="mrt40"><button className="blue">From Scratch</button></div>
            </section>
        )
    }
}

export default createcampaign
