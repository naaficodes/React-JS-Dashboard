import React from 'react'

function SingleSequence(props) {
    return (
        <div className="sequencebox">
              <h3>Step #{props.step} - Day&nbsp; <span id="seqday">{props.days}</span></h3>
            <div>
            <div className="mailtitlebox">
              {props.title}
            </div>
            <button className="addmailbutton">+</button>
            </div>
            </div>
    )
}

export default SingleSequence
