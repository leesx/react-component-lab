import React, { Component, PropTypes } from 'react'
import { Router, Route, hashHistory, Link, Redirect } from 'react-router';

import { findDOMNode } from 'react-dom'

import './style.css'



export default class SortableDemo extends React.Component{
    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <div className="wrapper">
              <ul>
                <li><Link to="sortable/normal" activeClassName="active">Normal</Link></li>
                <li><Link to="sortable/image" activeClassName="active">Image</Link></li>
                <li><Link to="sortable/dynamic" activeClassName="active">Dynamic</Link></li>
                <li><Link to="sortable/containment" activeClassName="active">Containment</Link></li>
                <li><Link to="sortable/handle" activeClassName="active">Handle</Link></li>
                <li><Link to="sortable/fixed" activeClassName="active">Mixed with un-sortable items</Link></li>
                <li><Link to="sortable/vertical" activeClassName="active">Vertically sorting</Link></li>
              </ul>
              {this.props.children}
            </div>
        )
    }
}
