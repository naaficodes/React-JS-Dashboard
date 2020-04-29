import React from 'react';
import {Link} from 'react-router-dom';

function Navitem(props) {
    return (
        <li>
           <Link to={props.linkurl}>{props.title}</Link>
        </li>
    )
}

export default Navitem
