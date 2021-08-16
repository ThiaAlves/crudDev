import React from 'react';
import ReactDOM from 'react-dom';
import "./fontawesome";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from "./footer";
import Developer from "./Developer";
import Formulario from "./Formulario";
import Navbar from "./navbar";
import "../../css/app.css";

function Example() {
    return (
        <Router>
        <>
        <Navbar />
            <Switch>
                <Route path="/" exact component={Formulario} />
                <Route path="/developers" exact component={Developer} />
            </Switch>
        </>
        <Footer />
        </Router>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
