import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import { Spin } from 'antd';
//import LazyImage from './index.js'

import LazyLoad from 'react-lazyload';


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

function PlaceholderComponent() {
  return (
     <div className="placeholder">

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
                  <li key={`img_${index}`} >
                    <LazyLoad  once={false}  height={300} offset={[-100, 0]} placeholder={<Spin />}>
                      <img src={item.src} />
                    </LazyLoad>
                  </li>
                )
            })
        )
    }



    render() {


        return (
            <div className="images-wrapper">

                <h1>===============图片延迟demo</h1>
                <Spin />
                <h2>第三组图片</h2>
                <ul className="img-list clearfix">
                    { this.renderImgList(MockData2) }
                </ul>
            </div>
        );
    }
}
