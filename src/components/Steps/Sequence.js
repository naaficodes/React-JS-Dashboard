import React from 'react';
import SingleSequence from './SingleSequence';

function Sequence(props) {
    return (
      
           
           <div className="contentbox">
           <h2>Template : {props.selected} </h2>
            <SingleSequence step="1" days="1" title="Hai wala mail"/>
            <SingleSequence step="2" days="5" title="Hai Again"/>
            <SingleSequence step="3" days="7" title="A little about us"/>
          </div>
    )
}

export default Sequence
