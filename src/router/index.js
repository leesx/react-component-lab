import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'


import Main from './Main';
import NoMatch from './NoMatch';
import './index.css';

import Calendar from './components/Calendar';
import ScrollBarDemo from './components/ScrollBarDemo';
import Lightbox2 from './components/Lightbox2';

export default (
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <Route path="calendar" component={Calendar}/>
        <Route path="scrollbar" component={ScrollBarDemo}/>
        <Route path="lightbox2" component={Lightbox2}/>
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
)
