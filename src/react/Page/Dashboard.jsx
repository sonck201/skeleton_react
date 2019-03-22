import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Dashboard extends Component {
    render() {
        return (
            <section>
                <h1>Dashboard</h1>
            </section>
        );
    }

    componentDidMount() {
        ReactDOM.render('', document.getElementById('content__alert'));
    }
}
