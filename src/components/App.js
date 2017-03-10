import React, { Component, PropTypes } from 'react'

import LeftMenu from './LeftMenu';

export default class App extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div style={{height:'100%'}}>
                <div className="left-box">
                  <LeftMenu />
                </div>
                <div className="right-box">
                    {this.props.children}
                </div>
            </div>
        )

    }


}
