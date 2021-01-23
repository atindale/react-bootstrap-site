import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./App";
import Users from "./components/users";
import Contact from "./components/contact";
import Notfound from "./components/notfound";
import Header from "./components/header";
import Footer from "./components/footer";

const routing = (
    <Router>
        <div>
        <Header />
        <hr />
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/users" component={Users} />
            <Route path="/contact" component={Contact} />
            <Route component={Notfound} />
        </Switch>
        <Footer />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
//ReactDOM.render(<App />, document.getElementById('root'));
