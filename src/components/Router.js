import React from 'react';

import Meal from './Meal'
import App from '../App';
import {BrowserRouter , Switch,Route,} from "react-router-dom";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/meal/:id" component={Meal} />
        </Switch>
    </BrowserRouter>
);
    

export default Router;