import './Config/Bootstrap';
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import Navigation from './Component/Navigation';
import Sidebar from './Component/Sidebar';
import Content from './Component/Content';

ReactDOM.render(
    <Router>
        <section className="container-fluid">
            <Navigation/>
            <section className="row">
                <nav className="col-md-10 col-xl-8 d-none d-md-block bg-light sidebar"><Sidebar/></nav>
                <main className="col-md-26 col-xl-28 ml-sm-auto px-4 content" id="mainContent">
                    <div id="content__alert" className="content__alert"/>
                    <section id="content__fluid" className="content__fluid"><Content/></section>
                </main>
            </section>
        </section>
    </Router>,
    document.getElementById('root'),
);
