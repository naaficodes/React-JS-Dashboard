import React from 'react'

function Sequence(props) {
    return (
      
           
           <div className="contentbox">
           <h2>Template : {props.selected} </h2>
            <div className="sequencebox">
              <h3>Step #1 - Day&nbsp; <span id="seqday">1</span></h3>
            <div>
            <div className="mailtitlebox">
              Abc
            </div>
            <button className="addmailbutton">+</button>
            </div>
            </div>
          </div>
    )
}

export default Sequence
