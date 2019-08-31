import React, { Component } from 'react';
import Menu from './Menu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';

class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>                    
                    <Menu />                                         
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/home" component={Home} />
                    </Switch>                                
                </div>
            </BrowserRouter>
        )
    }
}

export default Main;
