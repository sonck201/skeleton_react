import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import ConfigRouter from '../Config/Router';
import PageDashboard from '../Page/Dashboard';
import PageSetting from '../Page/Setting';

const Components = {
    Dashboard: PageDashboard,
    LogReader: PageSetting,
};

export default class Content extends Component {
    render() {
        return (ConfigRouter.map((r, k) => <Route exact key={k} path={r.path} component={Components[r.component]}/>));
    }
}
