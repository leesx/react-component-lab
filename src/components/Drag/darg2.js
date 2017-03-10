import React, { Component, PropTypes } from 'react'
import { Card, Spin,Icon } from 'antd';
import { findDOMNode } from 'react-dom'


export default class DragDemo2 extends Component{
    constructor(props) {
        super(props)

    }

    componentDidMount(){

    }

    handleSelectStart(){
      //return false
    }
    handleDragStart(ev){
      ev.dataTransfer.setData("Text",ev.target.id);
    }


    handleDragOver(ev){
      ev.preventDefault();
    }


    handleDragDrop(ev){
      ev.preventDefault();
      var data=ev.dataTransfer.getData("Text");
      ev.target.appendChild(document.getElementById(data));
    }

    render() {


        return (
            <div className="drag-container">
              <div id="div1" onDrop={this.handleDragDrop} onDragOver={this.handleDragOver}>
                <img
                  src="http://www.w3school.com.cn/i/eg_dragdrop_w3school.gif"
                  draggable="true"
                  onDragStart={this.handleDragStart}
                  id="drag1"
                />
              </div>
              <div id="div2" onDrop={this.handleDragDrop} onDragOver={this.handleDragOver}></div>
            </div>
        )
    }
}
