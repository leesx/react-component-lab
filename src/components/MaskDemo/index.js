/**
 * Created by leesx on 2016/6/20.
 */
import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import {Motion, spring} from 'react-motion';
import Mask from '../Mask'
import TweenOne from 'rc-tween-one';
const MockData = [{
    imgurl:'./src/images/01.jpg',
    title:'图片1',
},{
    imgurl:'./src/images/02.jpg',
    title:'图片2',
},{
  imgurl:'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-09-02/9577e9be05aea818907880ac66bdf4a0.jpg'
},{
  imgurl:'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-09-02/177e848bf4f0df538576f5422029c3e6.jpg'
}]

const MockData2 = [{
    imgurl:'http://www.people.com.cn/NMediaFile/2016/0902/MAIN201609021911314859050338728.jpg',
    title:'图片1',
},{
    imgurl:'http://www.people.com.cn/NMediaFile/2016/0902/MAIN201609021348521914980960649.jpg',
    title:'图片2',
},{
  imgurl:'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-09-02/9577e9be05aea818907880ac66bdf4a0.jpg'
},{
  imgurl:'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-09-02/177e848bf4f0df538576f5422029c3e6.jpg'
},{
  imgurl:'http://www.wallcoo.com/animal/v195_Lively_Dogs/wallpapers/1280x800/Lively_Dogs_wallpaper_MIX88041_wallcoo.com.jpg'
},{
  imgurl:'http://www.wallcoo.com/animal/v195_Lively_Dogs/wallpapers/1280x800/Lively_Dogs_wallpaper_MIX88041_wallcoo.com2.jpg'
}]

export default  class MaskDemo extends Component{

    constructor(props, context) {
        super(props, context)
        this.state = {
            showPicModal:false,
            imgData:[],
            open:false,
        }
    }

    componentDidMount = ()=>{

        //findDOMNode().appendChild('<div></div>')
        //document.body.appendChild(findDOMNode(this.refs.mask))
    }

    showPicModal(obj){
        //console.log(obj)
        this.setState({
            showPicModal:true,
            start:obj.index,
            imgData:obj.data,
            opacity:0,
        })


    }

    handleMouseDown=()=>{
       this.setState({
         open: !this.state.open,
         opacity:this.state.opacity ==1 ? 0 : 1,
       });
     }

   handleTouchStart=(e)=>{
     e.preventDefault();
     this.handleMouseDown();
   }

    closeHandlePicModal =()=>{
        this.setState({
            showPicModal:false,
            start:0,
        })
    }



    renderImgList = (data)=>{
        return (
            data.map((item,index)=>{
                return (
                  <Motion style={{x: spring(this.state.open ? 1 : 0)}} key={index}>
                    {({x}) =>
                       // children is a callback which should accept the current value of
                       // `style`

                       <li style={{
                         WebkitTransform: `opacity:${x}`,
                         transform: `opacity:${x}`,
                       }} key={`img_${index}`} onClick={this.showPicModal.bind(this,{data,index})}><img src={item.imgurl} /></li>
                     }

                  </Motion>
                )
            })
        )
    }



    render() {


        return (
            <div className="self-calendar">
                <button
                  onMouseDown={this.handleMouseDown}
                  onTouchStart={this.handleTouchStart}>
                  Toggle
                </button>
                <ul className="img-list clearfix">
                    { this.renderImgList(MockData) }
                </ul>
                <h2>第二组图片</h2>
                <ul className="img-list clearfix">
                    { this.renderImgList(MockData) }
                </ul>
                <h2>第三组图片</h2>
                <ul className="img-list clearfix">
                    { this.renderImgList(MockData2) }
                </ul>
                <TweenOne
                component = 'img'
                src="https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-09-02/9577e9be05aea818907880ac66bdf4a0.jpg"
                 animation={{ opacity: this.state.opacity, yoyo: false, repeat: -1, duration: 1000 }}
                 paused={this.props.paused}
                 style={{ opacity:0,transform: 'scale(1)',width:100,height:100,backgroundColor:'#f60', }}
                 className="code-box-shape"
               />
                {
                  this.state.imgData.length?
                  <Mask
                      showModal = { this.state.showPicModal }
                      closePicModal = {this.closeHandlePicModal}
                      start = {this.state.start}
                      imgSource = { this.state.imgData }
                   /> : null
                }


            </div>
        );
    }
}
