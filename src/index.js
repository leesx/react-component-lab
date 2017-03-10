import React from 'react'
import { render } from 'react-dom'
import { Router, Route,IndexRoute,IndexRedirect, Link, browserHistory,hashHistory } from 'react-router'
import "babel-polyfill";

import './style/index.css';
import './style/antd.css';

import App from './components/App';
import NoMatch from './NoMatch';


import Calendar from './components/Calendar';  // 日历
import ScrollBarDemo from './components/ScrollBarDemo'; // scrollBar 美化
import LightBoxDemo from './components/LightBox';
import MaskDemo from './components/MaskDemo';
import ScrollDemo from './components/Scroll';// 简单的滚动加载更多
import SortableDemo from './components/Sortable';
import Containment from './components/Sortable/containment';
import Vertical from './components/Sortable/vertical';
import DragDemo from './components/Drag';
import TestBabel from './components/TestBabel';

render((
    // withExampleBasename(browserHistory, __dirname)
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/calendar" />
      <Route path="/calendar" component={Calendar}/>
      <Route path="/scrollbar" component={ScrollBarDemo}/>
      <Route path="/lightbox" component={LightBoxDemo}/>
      <Route path="/maskdemo" component={MaskDemo}/>
      <Route path="/scroll" component={ScrollDemo}/>
      <Route path="/drag" component={DragDemo}/>
      <Route path="/testbabel" component={TestBabel}/>
      <Route path="/sortable" component={SortableDemo}>
          <Route path="containment" component={Containment} />
          <Route path="vertical" component={Vertical} />
      </Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('root'))
