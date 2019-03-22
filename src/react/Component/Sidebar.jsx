import $ from 'jquery/dist/jquery.slim';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ListRouter from '../Config/Router';

export default class Sidebar extends Component {
    componentDidMount() {
        $(`.sidebar__link[href="${window.location.hash}"]`).addClass('active');
    }

    render() {
        return (
            <div className="sidebar__sticky">
                <ul className="nav flex-column">
                    {
                        ListRouter.map((r, i) => {
                            return (
                                <li className="nav-item" key={i}>
                                    <Link className="nav-link sidebar__link" to={r.path} id={r.component} onClick={e => this.clickHandler(e, r.component)}>
                                        {r.title}
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }

    clickHandler(e, component) {
        let $ct = $(e.currentTarget);
        if ($ct.attr('href') === window.location.hash) {
            e.preventDefault();
        }

        $('.sidebar .sidebar__link').removeClass('active');
        $ct.addClass('active').closest('nav').attr('data-component', component);
        $('#alertContainer').html('');
    }
}
