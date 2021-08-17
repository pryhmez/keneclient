import React from "react";
import {Route, Switch} from "react-router-dom";
import LandingPage from "../pages/Landing";
import Attendance from "../pages/Attendance";
import Register from '../pages/Register';
import Students from '../pages/Students';
import PhotocardPage from "../pages/PhotocardPage";




const AppRouter = () => (
    <div>
        <Switch>
            <Route path="/" component={LandingPage} exact={true} />
            <Route path="/home" component={LandingPage} />
           
            <Route path='/registerstudent' component={Register} />
            <Route path='/attendance' component={Attendance} />
            <Route path='/students' component={Students} />
            <Route path='/photocard' component={PhotocardPage} />

        </Switch>
    </div>
)

export default AppRouter;