import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import App from './App';
import Home from './Home';
import Menu from './Menu';

const Navigator = () => {
    return (
        <div className="ui container">
            <BrowserRouter>
                <h1><Header /></h1>
                <div>
                    <Route path="/" exact component={Home} />
                    <Route path="/game" exact component={App} />
                    <Route path="/menu" exact component={Menu} />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default Navigator;
