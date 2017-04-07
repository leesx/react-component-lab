### This is an excellent lightbox. It is modeled on the jQuery version of the lightbox2. It has a great user experience. :100:
## 安装 :rocket:
`npm install rc-lightbox --save`

>  tips: 如果你的项目中没有安装 `rc-tween-one` 需要安装一下。
## 用法

`import Lightbox from 'rc-lightbox'`
```
<Lightbox
        imgSource={this.state.lightboxImgData}
        isOpen={this.state.lightboxIsOpen}
        currentImage = {this.state.currentImage}
        onClose={this.closeLightBox}
/>
```
### 参数说明 :art:
属性|类型|默认值|说明
-|-|-|-
isOpen|布尔值{Boolean}|false|设置lightbox的状态
imgSource|数组{Array}|[]| [{src:'http://'}]
currentImage|布尔值{Number}|0 | 当前第几张图片
onClose|函数{Function}|-|关闭lightbox

#### 示例代码 :tada:
```
import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
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
                   style={{
                             WebkitTransform: `opacity:${x}`,
                             transform: `opacity:${x}`,
                           }}
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
```
#### DEMO

![演示demo](https://github.com/leesx/rc-lightbox/blob/master/README.gif)
