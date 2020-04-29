import React, { Component } from 'react'

class BreadItem extends Component {
    render() {
        return (
        <li className={this.props.active?"active":""} id={this.props.id} onClick={this.props.showstep.bind(this,parseInt(this.props.id))}><div className="step">{this.props.id}</div>{this.props.step}</li>
        )
    }
}

export default BreadItem
