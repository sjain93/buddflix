import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Button = (props) => {
return (
    <div>
        <img src={props.picture} alt="{props.alt}" />
        <Router>
            <Link to={props.link}>{props.name}</Link>
            <Route path={props.link} exact component={props.component} />
        </Router>
    </div>
)
}

export default Button;