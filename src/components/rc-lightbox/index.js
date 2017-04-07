/**
 * 2017-4-7
 * lightbox2
 * 修复一个已知bug
 */

/**
 * 2017-3-31
 * lightbox2
 * 在图片切换的时候增加了动画效果。
 * 体验上更加接近jQuery版本的lightbox2
 */

/**
 * 2016-09-08
 * 修改为lightbox样式
 * 还有bug 加载新图片会有闪动，不知道怎么处理le.....
 */

import React, { Component, PropTypes } from 'react'
import TweenOne from 'rc-tween-one';
import { findDOMNode } from 'react-dom'
import  './index.less'

export default class LightBox extends Component{
    constructor(props){
        super(props)
        this.state = {
            loadingImg : true,
            currentImage:0,
            imgOpacity:0.1,
            overlayOpacity:0.6,
            imgWidth:null,
            imgHeight:null,
        }
    }

    componentDidMount=()=>{


      this.setState({
          currentImage:this.props.currentImage,
          imgSource:this.props.imgSource
      },()=>{
          this.preLoadImg()
      })

        //遮罩层的宽度和高度
        const overlay = findDOMNode(document.getElementById('overlay'))
        const h = document.body.clientHeight || document.documentElement.clientHeight
        overlay.style.width = '100%'
        overlay.style.height = h + 'px'
    }


    componentWillReceiveProps=(nextProps)=>{
        if(nextProps.currentImage !== undefined){
            this.setState({
                currentImage: nextProps.currentImage,
                imgSource:nextProps.imgSource,
                overlayOpacity:0.6,
            },()=>{
                this.preLoadImg(nextProps.currentImage)
            })

        }
    }

    resizeImg = ()=>{
      const winW = document.body.clientWidth || document.documentElement.clientWidth
      const winH = document.body.clientHeight || document.documentElement.clientHeight
      const imgObj = findDOMNode(this.refs.imgElem)

      const imgWidth = imgObj.width
      const imgHeight = imgObj.height

    }
    preLoadImg=(imageNumber)=>{
        const winW = document.body.clientWidth || document.documentElement.clientWidth
        const winH = document.body.clientHeight || document.documentElement.clientHeight



        let imgEle = findDOMNode(this.refs.imgElem)
        let oImg = new Image();
        //关键点2

        let imgUrl = this.state.imgSource[this.state.currentImage].src
        oImg.src = imgUrl
        this.setState({
            loadingImg:true,
        })

        oImg.onload = ()=>{
          //console.log('图片加载成功')
          if(!this.props.isOpen) return ;

          //关键点1
          imgEle.src = imgUrl
          // 在图片出来之前设置透明度为0
          imgEle.style.opacity = 0;


          let imgWidth = oImg.width
          let imgHeight = oImg.height

          if(imgHeight > winH){
              const scaleY = (winH - 100) /imgHeight
              imgWidth *= scaleY
              imgHeight *= scaleY
          }else if(imgWidth > winW){
              const scaleX = (winW - 100) /imgWidth
              imgWidth *= scaleX
              imgHeight *= scaleX
          }


          oImg = null;
          this.setState({
              imgWidth:imgWidth || 300,
              imgHeight:imgHeight || 300,
              top:(winH-imgHeight-8)/2,
              loadingImg:false,
              imgOpacity:1,
          })
        }

        //图片加载失败
        oImg.onerror = ()=>{
            this.setState({
                imgWidth:300,
                imgHeight:400,
            })
        }

    }


    nextImage(dir){
        let cur = this.state.currentImage

        this.setState({
            imgOpacity:0,
        })

        console.log(this.state.imgOpacity)
        if(dir === 1){
            cur++;
            if(cur > this.props.imgSource.length-1) return;
            this.setState({
                currentImage:cur,
            },()=>{
                this.preLoadImg(cur)
            })

        }else{
            cur--;
            if(cur < 0){
                cur = 0 ;
                return false;
            };
            this.setState({
                currentImage:cur,
            },()=>{
                this.preLoadImg(cur)
            })
        }

    }

    renderArrow = ()=>{
      const cur = this.state.currentImage

      return (
        <div className="lb-nav">
            <a className={ cur===0 ? 'lb-prev hide' : 'lb-prev'} onClick={this.nextImage.bind(this,0)} ></a>
            <a className={ cur===this.props.imgSource.length-1 ? 'lb-next hide' : 'lb-next'} onClick={this.nextImage.bind(this,1)} ></a>
        </div>
      )
    }
    handleClickOuter(e){
        //good
        if(e.target.id == 'lightbox' || e.target.id == 'overlay'){
            this.props.onClose()
            this.setState({
                imgOpacity:0,
                overlayOpacity:0,
            })
        }
    }



    render(){
        const displayStyle = this.props.isOpen  ? {display:'block'} : {display:'none'}

        const { imgWidth, imgHeight,top,left, } = this.state
        return (
            <div ref="lightBox" style = {displayStyle}>
                <TweenOne
                    id="overlay"
                    className="lightboxOverlay"
                    animation={{ opacity: this.state.overlayOpacity, yoyo: false, repeat: 0, duration: 1000 }}
                    component = 'div'
                    style={{opacity:0}}
                    onClick={this.handleClickOuter.bind(this)}
                    >
                </TweenOne>
                <div id="lightbox" className="lightbox" ref="imageBox" style={{top:top,left:left}} onClick={this.handleClickOuter.bind(this)}>
                    <div className="lb-outerContainer"  style={{width:`${imgWidth+8}`,height:`${imgHeight+8}`}} onClick={this.handleClickOuter.bind(this)}>
                        <div className="lb-container" >
                            {
                                // <img id="showImg"
                                //     className="lb-image"
                                //     key="image-box"
                                //     style={{display:this.state.loadingImg ? 'none' : 'block',width:`${imgWidth}`,height:`${imgHeight}`}}
                                //     />
                            }
                                <TweenOne
                                    animation={{ opacity: this.state.imgOpacity, yoyo: false, repeat: 0, duration: 1000 }}
                                    component = 'img'

                                    id="showImg"
                                    ref="imgElem"
                                    className="lb-image"
                                    key="image-box"
                                    style={{display:this.state.loadingImg ? 'none' : 'block',opacity:0,width:`${imgWidth}`,height:`${imgHeight}`}}
                                  />

                            {this.renderArrow()}
                            <div className="lb-loader" style={{width:'100%',height:300,display:this.state.loadingImg ? 'block' : 'none'}}>
                                <a className="lb-cancel"></a>
                            </div>
                        </div>
                    </div>
                    <div className="lb-dataContainer" style={{width:`${imgWidth+8}`,height:`${imgHeight+8}`}}>
                        <div className="lb-data">
                            {
                                <div className="lb-details"><span className="lb-caption"></span><span className="lb-number">{`${this.state.currentImage+1}/${this.props.imgSource.length}`}</span>
                                </div>
                            }
                            <div className="lb-closeContainer">
                                <a className="lb-close" onClick = {this.props.onClose}></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

LightBox.propTypes = {
  children: PropTypes.any,
  imgSource: PropTypes.array,
  isOpen: PropTypes.bool,
  onClose:PropTypes.func,
};

LightBox.defaultProps = {
    imgSource: [], //图片数组  [{src:'http://imageUrl'}]
    isOpen:false,
    currentImage:0,
}
