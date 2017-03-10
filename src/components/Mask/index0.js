import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { findDOMNode } from 'react-dom'

import './css/index.css'

export default class Mask extends Component{
    constructor(props){
        super(props)


        this.state = {
            loadingImg : true,
            start:0
        }
    }

    componentDidMount=()=>{
        //console.log('你好',this.props.start)
        //this.changeImg(0)
        console.dir(findDOMNode(document.getElementById('showImg')))
        this.preLoadImg(findDOMNode(document.getElementById('showImg')))

        this.setState({
          start:this.props.start
        })
    }

    componentWillReceiveProps=(nextProps)=>{
      //console.log(this.props.start,nextProps)
        if(nextProps.start !== undefined){
            this.setState({
                start: nextProps.start
            },()=>{
              this.preLoadImg(findDOMNode(document.getElementById('showImg')))
            })

        }
    }
    preLoadImg = (oImg)=>{
      const winW = document.body.clientWidth || document.documentElement.clientWidth
      const winH = document.body.clientHeight || document.documentElement.clientHeight

      oImg.src = this.props.imgSource[this.state.start].imgurl
      oImg.onload = ()=>{
        this.setState({
            loadingImg:false
        })

        const imgWidth = oImg.width
        const imgHeight = oImg.height

        console.log(imgWidth,imgHeight)

        const centerPosX = (winW - imgWidth)/2 + 'px'
        const centerPosY = (winH - imgHeight)/2 + 'px'

        findDOMNode(this.refs.imageBox).style.cssText=`left:${centerPosX};top:${centerPosY}`
      }
    }


    nextImage(dir){
        let cur = this.state.start

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
        console.log(findDOMNode(document.getElementById('showImg')))

        this.preLoadImg(findDOMNode(document.getElementById('showImg')))
        //findDOMNode(document.getElementById('showImg')).src = this.props.imgSource[cur].imgurl
        //this.changeImg(cur)

    }




    render(){
        const disp = this.props.showModal ? 'block' : 'none'
        return (
            <div ref="mask" className = {this.props.showModal ? 'show' : 'hide'}>
                <div className="mask" >
                </div>
                <div className="image-wrap" ref="imageBox">
                    {
                        this.state.loadingImg ? <div className="show"><img src="./src/images/loading.gif" /></div> : <div className="hide"><img src="./src/images/loading.gif" /></div>
                    }
                    <img id="showImg"  />
                    <div className="lb-nav">
                        <a className="lb-prev" onClick={this.nextImage.bind(this,0)} ></a>
                        <a className="lb-next" onClick={this.nextImage.bind(this,1)} ></a>
                    </div>
                    <div className="lb-close" onClick = {this.props.closePicModal}></div>
                </div>
            </div>
        )
    }
}
