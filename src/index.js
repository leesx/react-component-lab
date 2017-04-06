import React from 'react'
import { render } from 'react-dom'
import { Router, Route,IndexRoute,IndexRedirect, Link, browserHistory,hashHistory } from 'react-router'
import "babel-polyfill";

import './style/index.less';

import App from './components/App';
import NoMatch from './NoMatch';


import Calendar from './components/Calendar';  // 日历
import ScrollBarDemo from './components/ScrollBarDemo'; // scrollBar 美化
import ScrollDemo from './components/Scroll';// 简单的滚动加载更多
import SortableDemo from './components/Sortable';
import Containment from './components/Sortable/containment';
import Vertical from './components/Sortable/vertical';
import DragDemo from './components/Drag';
import TestBabel from './components/TestBabel';
import Lightbox2 from './components/LightBox2';

render((
    // withExampleBasename(browserHistory, __dirname)
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/calendar" />
      <Route path="/calendar" component={Calendar}/>
      <Route path="/scrollbar" component={ScrollBarDemo}/>
      <Route path="/scroll" component={ScrollDemo}/>
      <Route path="/drag" component={DragDemo}/>
      <Route path="/lightbox2" component={Lightbox2}/>
      <Route path="/testbabel" component={TestBabel}/>
      <Route path="/sortable" component={SortableDemo}>
          <Route path="containment" component={Containment} />
          <Route path="vertical" component={Vertical} />
      </Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('root'))
