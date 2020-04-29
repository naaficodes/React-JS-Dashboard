import React from 'react'

function People(props) {
    return (
        <div className="contentbox">
           <table className="peopletable">
           {props.peoplelist.map((person)=>{
             return(  <tr>
                   <td>{person[0]}</td>
                     <td>{person[1]}</td>
               </tr>)
           })}
           </table>
        </div>
    )
}

export default People
