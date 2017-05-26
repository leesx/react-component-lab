import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import { Spin } from 'antd';
//import LazyImage from './index.js'

import LazyLoad from 'react-lazyload';
import './index.less'

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
},{
  src:'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-09-02/9577e9be05aea818907880ac66bdf4a0.jpg'
},{
  src:'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-09-02/177e848bf4f0df538576f5422029c3e6.jpg'
},{
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
},{
  src:'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-09-02/9577e9be05aea818907880ac66bdf4a0.jpg'
},{
  src:'https://gss0.bdstatic.com/5eR1dDebRNRTm2_p8IuM_a/res/r/image/2016-09-02/177e848bf4f0df538576f5422029c3e6.jpg'
}]

/**
 * 占位组件
 * 注意:要设置高度
 */
function PlaceholderComponent() {
  return (
     <div className="placeholder" style={{height:300}}>
       <Spin />
     </div>
  )
}

export default  class LazyImagesDemo extends Component{

    constructor(props, context) {
        super(props, context)
    }

    componentDidMount = ()=>{

    }
    renderImgList = (data)=>{
        return (
            data.map((item,index)=>{
                return (
                  <LazyLoad key={index} once={true}  height={300} offset={[-100, 0]} placeholder={PlaceholderComponent()}>
                      <li className="list-item">
                        <img src={item.src} />
                      </li>
                  </LazyLoad>

                )
            })
        )
    }



    render() {


        return (
            <div className="images-wrapper">

                <h1>图片懒加载组件</h1>
                <ul className="img-list clearfix">
                    { this.renderImgList(MockData2) }
                </ul>
            </div>
        );
    }
}
