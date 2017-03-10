import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Animate from 'rc-animate';
import { findDOMNode } from 'react-dom'

import './css/index.css'

export default class Mask extends Component{
    constructor(props){
        super(props)


        this.state = {
            loadingImg : true,
            start:0,
            flag:true,
        }
    }

    componentDidMount=()=>{
        this.preLoadImg(findDOMNode(document.getElementById('showImg')))

        this.setState({
          start:this.props.start
        })

        window.onresize = ()=>{

          this.resizeImg()
          this.preLoadImg(findDOMNode(document.getElementById('showImg')))
        }
    }

    componentWillReceiveProps=(nextProps)=>{
      //console.log(this.props.start,nextProps)
        if(nextProps.start){
            this.setState({
                start: nextProps.start
            })
        }
    }

    resizeImg = ()=>{
      const winW = document.body.clientWidth || document.documentElement.clientWidth
      const winH = document.body.clientHeight || document.documentElement.clientHeight
      const imgObj = findDOMNode(document.getElementById('showImg'))

      const imgWidth = imgObj.width
      const imgHeight = imgObj.height


      const centerPosX = (winW - imgWidth)/2 + 'px'
      const centerPosY = (winH - imgHeight)/2 + 'px'

      findDOMNode(this.refs.imageBox).style.cssText=`left:${centerPosX};top:${centerPosY};`
    }
    preLoadImg=(oImg)=>{
        const winW = document.body.clientWidth || document.documentElement.clientWidth
        const winH = document.body.clientHeight || document.documentElement.clientHeight



        oImg.onload = ()=>{

          if(!this.props.showModal) return ;
          this.setState({
              loadingImg:false
          })
          const imgWidth = oImg.width
          const imgHeight = oImg.height

          const centerPosX = (winW - imgWidth)/2 + 'px'
          const centerPosY = (winH - imgHeight)/2 + 'px'
          oImg.style.opacity = 1;
          findDOMNode(this.refs.imageBox).style.cssText=`left:${centerPosX};top:${centerPosY};`
        }

        oImg.onerror = ()=>{

          //findDOMNode(this.refs.imageBox).style.cssText=`left:50%;top:50%;width:400px;height:300px;margin:-150px 0 0 -200px;`
          console.log('加载失败')
        }

    }


    nextImage(dir){
        let cur = this.state.start

        this.setState({
          flag:!this.state.flag,
        })

        //findDOMNode(document.getElementById('showImg'))

        if(dir === 1){
            cur++;
            if(cur > this.props.imgSource.length-1) return;
            this.setState({
                start:cur
            })

        }else{
            cur--;
            if(cur < 0){
                cur = 0 ;
                return false;
            };
            this.setState({
                start:cur
            })
        }
        //console.log(findDOMNode(document.getElementById('showImg')))
        this.preLoadImg(findDOMNode(document.getElementById('showImg')))
    }

    renderArrow = ()=>{
      const cur = this.state.start

      return (
        <div className="lb-nav">
            <a className={ cur===0 ? 'lb-prev hide' : 'lb-prev'} onClick={this.nextImage.bind(this,0)} ></a>
            <a className={ cur===this.props.imgSource.length-1 ? 'lb-next hide' : 'lb-next'} onClick={this.nextImage.bind(this,1)} ></a>
        </div>
      )
    }




    render(){
        const isDisplay = this.props.showModal ? 'show' : 'hide'
        const styles = {
          opacity:this.state.opacity
        }
        return (
            <div ref="lightBox" className = {isDisplay}>
                <div className="mask" onClick = {this.props.closePicModal}>
                </div>
                <div className="image-wrap" ref="imageBox">
                    {
                        this.state.loadingImg ? <div className="show"><img src="./src/images/loading.gif" /></div> : <div className="hide"><img src="./src/images/loading.gif" /></div>
                    }
                    <Animate showProp="visible" transitionName="fade">
                      <img id="showImg" key="image-box" style={styles} src={this.props.imgSource[this.state.start].imgurl} />
                    </Animate>

                    {
                      this.renderArrow()
                    }
                    <div className="lb-close" onClick = {this.props.closePicModal}></div>
                </div>
            </div>
        )
    }
}
