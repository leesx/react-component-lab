import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import {Motion, spring} from 'react-motion';
import Lightbox from 'rc-lightbox'


const MockData = [{
    src:'./src/images/01.jpg',
    title:'图片1',
},{
    src:'./src/images/02.jpg',
    title:'图片2',
},{
  src:'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-09-02/9577e9be05aea818907880ac66bdf4a0.jpg'
},{
  src:'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-09-02/177e848bf4f0df538576f5422029c3e6.jpg'
}]

const MockData2 = [{
    src:'http://www.people.com.cn/NMediaFile/2016/0902/MAIN201609021911314859050338728.jpg',
    title:'图片1',
},{
    src:'http://www.people.com.cn/NMediaFile/2016/0902/MAIN201609021348521914980960649.jpg',
    title:'图片2',
},{
  src:'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-09-02/9577e9be05aea818907880ac66bdf4a0.jpg'
},{
  src:'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-09-02/177e848bf4f0df538576f5422029c3e6.jpg'
},{
  src:'http://www.wallcoo.com/animal/v195_Lively_Dogs/wallpapers/1280x800/Lively_Dogs_wallpaper_MIX88041_wallcoo.com.jpg'
},{
  src:'http://www.wallcoo.com/animal/v195_Lively_Dogs/wallpapers/1280x800/Lively_Dogs_wallpaper_MIX88041_wallcoo.com2.jpg'
}]



export default  class Lightbox2 extends Component{

    constructor(props, context) {
        super(props, context)
        this.state = {
            lightboxImgData:[],
            lightboxIsOpen:false,
            currentImage:0,

        }
    }

    componentDidMount = ()=>{

        //findDOMNode().appendChild('<div></div>')
        //document.body.appendChild(findDOMNode(this.refs.mask))
    }

    closeLightBox=()=>{
      console.log('关闭')
      this.setState({
        lightboxIsOpen:false
      })
    }

    showPicModal(imgGrounp){
        this.setState({
            lightboxIsOpen:true,
            currentImage:imgGrounp.index || 0,
            lightboxImgData:imgGrounp.imgs,
        })
    }

    renderImgList = (data)=>{
        return (
            data.map((item,index)=>{
                return (
                  <li
                   key={`img_${index}`}
                   onClick={this.showPicModal.bind(this,{imgs:data,index})}
                   >
                    <img src={item.src} />
                  </li>
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

                {
                  this.state.lightboxImgData.length?
                  <Lightbox
                    imgSource={this.state.lightboxImgData}
                    isOpen={this.state.lightboxIsOpen}
                    currentImage = {this.state.currentImage}
                    onClose={this.closeLightBox}
                  /> : null
                }


            </div>
        );
    }
}
