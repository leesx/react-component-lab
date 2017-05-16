/**
 * 放大镜组件
 */
import React, { Component, PropTypes } from 'react'

import Zoom from './../Zoom'

export default class Magnifier extends Component{
  constructor(props){
    super()
    this.state={
      originImg:'//img11.360buyimg.com/n1/jfs/t4846/287/704578321/335128/31278ccd/58e73a49N3d672fb7.jpg',
      zoomImg:'http://img11.360buyimg.com/n0/jfs/t4846/287/704578321/335128/31278ccd/58e73a49N3d672fb7.jpg',

    }
  }

  render(){
    const {originImg,zoomImg,isShowMask,maskTop,maskLeft} = this.state
    return (
      <div>
        <h2 style={{fontSize:24,marginBottom:20}}>放大镜组件</h2>
        <Zoom {...this.state} />

      </div>
    )
  }
}
