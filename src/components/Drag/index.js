import React, { Component, PropTypes } from 'react'
import { Card, Spin,Icon } from 'antd';
import { findDOMNode } from 'react-dom'

import DragDemo2 from './darg2'
import './style.css'

let eleDrag= null

export default class DragDemo extends Component{
    constructor(props) {
        super(props)
        this.state={
          listData:[
            {
              name:'爱奇艺'
            },
            {
              name:'优酷'
            },
            {
              name:'百度视频'
            },
            {
              name:'腾讯视频'
            },
            {
              name:'芒果TV'
            },
            {
              name:'搜狐视频'
            }
          ]
        }
    }

    componentDidMount(){

    }

    handleSelectStart(){
      //return false
    }
    handleDragStart(ev){
      /*拖拽开始*/
       //拖拽效果
       ev.dataTransfer.effectAllowed = "move";
       ev.dataTransfer.setData("text", ev.target.innerHTML);
       ev.dataTransfer.setDragImage(ev.target, 0, 0);
       eleDrag = ev.target;
       console.log(ev)
       return true;
    }
    handleDragEnd(ev){
       /*拖拽结束*/
        ev.dataTransfer.clearData("text");
        eleDrag = null;
        return false
    }

    handleDragOver(ev){
      /*拖拽元素在目标元素头上移动的时候*/
      ev.preventDefault();
      return true;
    }

    handleDragEnter(ev){
      /*拖拽元素进入目标元素头上的时候*/
      ev.target.style.color = "#ffffff";
      return true;
    }

    handleDragDrop(ev){
      /*拖拽元素进入目标元素头上，同时鼠标松开的时候*/
      // if (eleDrag) {
      //     eleRemind.innerHTML = '<strong>"' + eleDrag.innerHTML + '"</strong>被扔进了垃圾箱';
      //     eleDrag.parentNode.removeChild(eleDrag);
      // }
      ev.target.style.color = "#000000";
      return false;
    }

    render() {
       const {listData}=this.state

        return (
            <div className="drag-container">
                <div>
                  <div
                    className="dustbin"
                    onDragOver={this.handleDragOver}
                    onDragEnter={this.handleDragEnter}
                    onDrop={this.handleDragDrop}

                    ><Icon type="shopping-cart" /></div>
                  <div className="dragbox">
                    {
                      listData.map((item,index)=>{
                        return (
                          <div
                            key={`item_${index}`}
                            className="draglist"
                            title={`拖拽我吧——${item.name}`}
                            draggable="true"
                            onSelectStart={this.handleSelectStart}
                            onDragStart={this.handleDragStart}
                            onDragEnd={this.handleDragEnd}
                            >{item.name}</div>
                        )
                      })
                    }
                  </div>
                  <div className="dragremind"></div>
                </div>
                <div>
                  <DragDemo2 />
                </div>
            </div>
        )
    }
}
