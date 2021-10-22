import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from '../screen/auth/login';
import ProtectedRoutes from './ProtectedRoutes';
import { routerPathProtected  , routerPathPublic } from './RouterPath';



function Index() {
    return (
        <Router>
            <Switch>
                <Route exact path={routerPathPublic.Login} component={LoginScreen}/>
                <Route path={Object.values(routerPathProtected)} component={ProtectedRoutes} />
            </Switch>
        </Router>
    )
}

export default Index