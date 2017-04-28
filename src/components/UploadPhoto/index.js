import React, { Component, PropTypes } from 'react'
import { Card, Spin } from 'antd';
import { findDOMNode } from 'react-dom'

import './index.less'

const MOCK_IMG = 'https://ss3.baidu.com/7LsWdDW5_xN3otqbppnN2DJv/pass/;q=90;g=0/sign=7b4be78153ee3d6d6e8a8fc2732d0a1f/4afbfbedab64034f52863620a5c379310a551d48.jpg'

const getCss = function(o,key){
	const value = o.currentStyle? o.currentStyle[key] : document.defaultView.getComputedStyle(o,false)[key];
	return parseInt(value);
};


export default class UploadPhoto extends Component{
  constructor(props){
    super()
    this.moveFlag=false;
    this.left=0;
    this.right=0;
    this.state={
			maskWidth:100,//遮罩初始的宽度
			maskHeight:100,
			maskLeft:0, //遮罩初始的坐标点
			maskTop:0,


      beginX:0,
      beginY:0,
      moveX:0,
      moveY:0,
			rotateDeg:0,//旋转度数
    }
  }

  componentDidMount(){


  }
  onTrackerMouseDown=(event)=>{
    this.moveFlag = true;
    this.setState({
      beginX:event.clientX,
      beginY:event.clientY,
    })

		const imgHolderNode = this.imgHolderNode
    const target = this.trackerNode

		//遮罩选择区域的宽度和高度
		const targetW = getCss(target, "width")
		const targetH = getCss(target, "height")
		//要裁切图片的宽度和高度
		const picW = getCss(imgHolderNode, "width")
		const picH = getCss(imgHolderNode, "height")

		console.log('width',getCss(imgHolderNode, "width"))

		if(getCss(target, "left") !== "auto"){
			this.left = getCss(target, "left");
		}
		if(getCss(target, "top") !== "auto"){
			this.top = getCss(target, "top");
		}


		document.onmousemove = (e)=>{
			const {beginX,beginY} = this.state
      if(!this.moveFlag) return ;
			let disX = e.clientX-beginX
			let disY = e.clientY-beginY

			// console.log(disX)

			let moveX = disX+this.left
			let moveY = disY+this.top

			if(moveX < 0){
				moveX = 0;
			}else if(moveX > picW-targetW){
				moveX = picW-targetW
			}

			if(moveY < 0){
				moveY = 0
			}else if(moveY > picH-targetH){
				moveY = picH-targetH
			}


			console.log('输出:',moveX,moveY)
      this.setState({
        moveX,
        moveY,
      })
		}


		document.onmouseup =()=>{
			document.onmouseup = null;
			document.onmousemove = null;
		}
  }

	handleDrag(dir,e){
		const {maskWidth,maskHeight} = this.state
		const pBeginX = e.clientX
		const pBeginY = e.clientY
		//debugger
		let top = getCss(this.trackerNode, "top")
		let left = getCss(this.trackerNode, "left")

		document.onmousemove = (event)=>{
			let disX = event.clientX -pBeginX
			let disY = event.clientY -pBeginY

			// if(disX < 0){
			// 	disX = 0;
			// }else if(disX + 100 > 300 ){
			// 	disX = 200
			// }


			if(dir == 's'){
				this.setState({
					maskWidth : maskHeight+disY,
					maskHeight : maskHeight+disY
				})
			}else if(dir == 'n'){
				this.setState({
					moveY:top+disY,
					maskWidth : top-disY,
					maskHeight : top-disY
				})
			}else if(dir == 'w'){
				this.setState({
					moveX:left+disX,
					maskWidth : left-disX,
					maskHeight : left-disX
				})
			}else if(dir == 'se' || dir == 'e'){
				this.setState({
					maskWidth : maskWidth+disX,
					maskHeight : maskWidth+disX
				})
			}else if(dir == 'nw'){

				this.setState({
					moveX:left +disX,
					moveY:left +disX,
					maskWidth : maskWidth-disX,
					maskHeight : maskWidth-disX
				})
			}else if(dir == 'sw'){
				this.setState({
					moveX:left +disX,
					maskWidth : (left -disX),
					maskHeight : (left -disX)
				})
			}else if(dir == 'ne'){
				this.setState({
					moveY:top +disY,
					maskWidth : (top -disY),
					maskHeight : (top - disY)
				})
			}

		}

		document.onmouseup = ()=>{
			document.onmousemove = null
			document.onmouseup = null
		}


	}

	handleTransform(dir){
		this.setState({
			rotateDeg:dir === 1 ? this.state.rotateDeg+90 : this.state.rotateDeg-90
		})
	}

  render(){
    const {moveX,moveY,maskWidth,maskHeight,rotateDeg} = this.state
    return (
      <div>
				<h1 style={{marginBottom:30}}>头像编辑组件</h1>
					<div className="avatar-wrapper">
		          <div className="avatar-view">
		            <img
									src={MOCK_IMG}
									className="origin"
									style={{
		              position:'absolute',
		              top:'50%',
		              left:'50%',
		              width:300,
		              height:300,
		              marginLeft:-150,
		              marginTop:-150,
		              visibility:'hidden',
		              zIndex:10,
									transform: `rotateZ(${rotateDeg}deg)`
		              }} />
								<div className="jcrop-holder" ref={(node)=>this.imgHolderNode = node}>
		              <div
										ref={(node)=>this.trackerNode = node}
										style={{
		                  position: 'absolute',
		                  zIndex: 600,
		                  width: maskWidth,
		                  height: maskHeight,
		                  top: moveY,
		                  left: moveX,
		                }}>
		                  <div style={{
		                      width: '100%',
		                      height: '100%',
		                      zIndex: 310,
		                      position: 'absolute',
		                      overflow: 'hidden',
		                    }}>
		                      <img src={MOCK_IMG} style={{
		                          border: 'none',
		                          visibility: 'visible',
		                          margin: 0,
		                          padding: 0,
		                          position: 'absolute',
		                          top: -moveY,
		                          left: -moveX,
		                          width: 300,
		                          height: 300,
															transform: `rotateZ(${rotateDeg}deg)`
		                        }} />
		                      <div className="jcrop-hline" style={{
		                          position: 'absolute',
		                          opacity: 0.4,
		                        }}></div>
		                      <div className="jcrop-hline bottom" style={{
		                          position: 'absolute',
		                           opacity: 0.4,
		                        }}></div>
		                      <div className="jcrop-vline right" style={{
		                          position: 'absolute',
		                          opacity: 0.4,
		                        }}></div>
		                      <div className="jcrop-vline" style={{
		                          position: 'absolute',
		                          opacity: 0.4,
		                        }}></div>
		                      <div
		                        className="jcrop-tracker"

		                        onMouseDown={this.onTrackerMouseDown}
		                        style={{
		                          cursor: 'move',
		                          position: 'absolute',
		                          zIndex: 360,
		                        }}></div>
		                  </div>
		                  <div style={{
		                      width: '100%',
		                      height: '100%',
		                      zIndex: 320,
		                      display: 'block',
		                    }}>
		                      <div
														className="ord-n jcrop-dragbar"
														onMouseDown={this.handleDrag.bind(this,'n')}
														style={{
		                          cursor: 'n-resize',
		                          position: 'absolute',
		                          zIndex: 370,
		                        }}></div>
		                      <div
														className="ord-s jcrop-dragbar"
														onMouseDown={this.handleDrag.bind(this,'s')}
														style={{
		                          cursor: 's-resize',
		                          position: 'absolute',
		                          zIndex: 371,
		                        }}></div>
		                      <div
														className="ord-e jcrop-dragbar"
														onMouseDown={this.handleDrag.bind(this,'e')}
														style={{
		                          cursor: 'e-resize',
		                          position: 'absolute',
		                          zIndex: 372,
		                        }}></div>
		                      <div
														className="ord-w jcrop-dragbar"
														onMouseDown={this.handleDrag.bind(this,'w')}
														style={{
		                          cursor: 'w-resize',
		                          position: 'absolute',
		                          zIndex: 373,
		                        }}></div>
		                      <div
														className="ord-n jcrop-handle"
														onMouseDown={this.handleDrag.bind(this,'n')}
														style={{
		                          cursor: 'n-resize',
		                          position: 'absolute',
		                          zIndex: 374,
		                          opacity: 0.5,
		                        }}></div>
		                      <div
														className="ord-s jcrop-handle"
														onMouseDown={this.handleDrag.bind(this,'s')}
														style={{
		                          cursor: 's-resize',
		                          position: 'absolute',
		                          zIndex: 375,
		                          opacity: 0.5,
		                        }}></div>
		                      <div
														className="ord-e jcrop-handle"
														onMouseDown={this.handleDrag.bind(this,'e')}
														style={{
		                          cursor: 'e-resize',
		                          position: 'absolute',
		                          zIndex: 376,
		                          opacity: 0.5,
		                        }}></div>
		                      <div
														className="ord-w jcrop-handle"
														onMouseDown={this.handleDrag.bind(this,'w')}
														style={{
		                          cursor: 'w-resize',
		                          position: 'absolute',
		                          zIndex: 377,
		                          opacity: 0.5,
		                        }}></div>
		                      <div
														className="ord-nw jcrop-handle"
														onMouseDown={this.handleDrag.bind(this,'nw')}
														style={{
		                          cursor: 'nw-resize',
		                          position: 'absolute',
		                          zIndex: 378,
		                          opacity: 0.5,
		                        }}></div>
		                      <div
														className="ord-ne jcrop-handle"
														onMouseDown={this.handleDrag.bind(this,'ne')}
														style={{
		                          cursor: 'ne-resize',
		                          position: 'absolute',
		                          zIndex: 379,
		                          opacity: 0.5,
		                        }}></div>
		                      <div
														className="ord-se jcrop-handle"
														onMouseDown={this.handleDrag.bind(this,'se')}
														style={{
		                          cursor: 'se-resize',
		                          position: 'absolute',
		                          zIndex: 380,
		                          opacity: 0.5,
		                        }}></div>
		                      <div
														className="ord-sw jcrop-handle"
														onMouseDown={this.handleDrag.bind(this,'sw')}
														style={{
		                          cursor: 'sw-resize',
		                          position: 'absolute',
		                          zIndex: 381,
		                          opacity: 0.5,
		                        }}></div>
		                  </div>
		              </div>
		              <div
										className="jcrop-tracker"
										style={{
		                  width: 304,
		                  height: 304,
		                  position: 'absolute',
		                  top: -2,
		                  left: -2,
		                  zIndex: 290,
		                  cursor: 'crosshair',
		                }}></div>
		              <img
										src={MOCK_IMG}
										style={{
		                  position:'absolute',
		                  top:0,
		                  left:0,
		                  opacity:0.6,
		                  width:300,
		                  height:300,
											transform: `rotateZ(${rotateDeg}deg)`
		                }}  />
		            </div>

		          </div>
							<p>
								<button onClick={this.handleTransform.bind(this,-1)}>逆时针</button>
								<button onClick={this.handleTransform.bind(this,1)}>顺时针</button>
							</p>
		          <div className="avatar-preview">
		            <div className="avatar-copper">
		              <div className="avatar-lg">
		                <img src={MOCK_IMG} style={{
		                    width:Math.round(100/(maskWidth/300)),
		                    height:Math.round(100/(maskWidth/300)),
		                    marginLeft:-moveX,
		                    marginTop:-moveY,
												transform: `rotateZ(${rotateDeg}deg)`
		                  }} />
		              </div>
		              <p>大头像100*100</p>
		            </div>
		            <div className="avatar-copper">
		              <div className="avatar-sm">
		                <img
											src={MOCK_IMG}
											style={{
		                    width:Math.round(55/(maskWidth/300)),
		                    height:Math.round(55/(maskWidth/300)),
		                    marginLeft:-moveX*0.55,
		                    marginTop:-moveY*0.55,
												transform: `rotateZ(${rotateDeg}deg)`
		                  }} />
		              </div>
		              <p>小头像55*55</p>
		            </div>
		          </div>
		      </div>
			</div>
    )
  }
}
