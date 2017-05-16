/**
 * 放大镜组件
 */
import React, { Component, PropTypes } from 'react'

import './index.less'



export default class Zoom extends Component{
  constructor(props){
    super(props)
    this.state={
      originImg:this.props.originImg,
      zoomImg:this.props.zoomImg,

      isShowMask:false,
      maskWidth: 174, //遮罩层的宽度
      originImgWidth: 350,// 预览图片的宽度
      maskTop:0,
      maskLeft:0,

    }
  }
  componentDidMount(){
    console.dir(this.originImgNode)
    this.setState({
      //originImgWidth:this.originImgNode.width,
      maskWidth:this.maskNode.offsetWidth,
    })
  }
  handleMouseOver=()=>{
    if(this.state.isShowMask) return ;
    this.setState({
      isShowMask:true
    })

    document.onmousemove = (e)=>{
      const rect = this.originImgNode.getBoundingClientRect()
			let disX = e.clientX - rect.left
			let disY = e.clientY - rect.top

      const begin = (this.maskNode.width/2)-12  //12 为鼠标move图标宽度的一半
      const end = this.originImgNode.offsetWidth - begin
      console.log(begin,end)
			if(disX < begin){
				disX = begin
			}else if(disX > end){
				disX = end
			}
      //disX = Math.min()

			if(disY < begin){
				disY = begin
			}else if(disY > end){
				disY = end
			}
      this.setState({
        maskTop:disY,
        maskLeft:disX,
      })
    }

  }
  handleMouseOut=(e)=>{
    this.setState({
      isShowMask:false
    },()=>{
			document.onmousemove = null
		})
  }

  render(){
    const {originImg,zoomImg,isShowMask,maskTop,maskLeft,originImgWidth,maskWidth} = this.state
    console.log(originImgWidth,maskWidth,'===')
    return (
      <div>
        <div className="zoom-wrap">
          <div
            className="origin-img"
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
          >
            <img
              ref={(node)=>this.originImgNode = node}
              src={originImg}
             />

             <div
               className="mask-box"
               ref={(node)=>this.maskNode = node}
               style={{
                 left:maskLeft,
                 top:maskTop,
                 marginTop:-maskWidth/2,
                 marginLeft:-maskWidth/2,
                 visibility:isShowMask? 'visible' : 'hidden'
               }}
             ></div>

          </div>
          <div className="zoom-img" style={{display:isShowMask? 'block' : 'none'}}>
            <img src={zoomImg} style={{
              position:'absolute',
              marginLeft:-(maskLeft-(maskWidth/2))*(originImgWidth/maskWidth),
              marginTop:-(maskTop-(maskWidth/2))*(originImgWidth/maskWidth),
            }} />
          </div>
        </div>
      </div>
    )
  }
}
