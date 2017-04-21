import React, { Component, PropTypes } from 'react'
import {findDOMNode} from 'react-dom'


let imageStore = [];
export default class LazyImage extends Component{
  constructor(props, context) {
      super(props, context)
      this.imgNode = null;

      this.state={
        isScrolledIntoView:false,
      }
  }

  componentDidMount(){

    const element = this.imgNode
    const img = new Image()


    img.onload = ()=>{
      img.src = this.props.imgSource
      const coords = img.getBoundingClientRect();
      const isScrolledIntoView = ((coords.top >= 0 && coords.left >= 0 && coords.top) <= (window.innerHeight || document.documentElement.clientHeight))
      if(isScrolledIntoView){
        this.setState({
          isScrolledIntoView,
        })
      }
    }


    // window.onscroll =()=>{
    //   for(let i=0;i<imageStore.length;i++){
    //     console.log(imageStore[i])
    //     console.log(this.props.imgSource,'---------')
    //     this.scrolledIntoView(imageStore[i])
    //   }
    // }
  }

  scrolledIntoView(element){
    const coords = element.getBoundingClientRect();
    console.log(coords)
    const isScrolledIntoView = ((coords.top >= 0 && coords.left >= 0 && coords.top) <= (window.innerHeight || document.documentElement.clientHeight))

    console.log(coords.top,window.innerHeight)

    this.setState({
      isScrolledIntoView,
    })



  }

  loadImg=()=>{
    console.log('-----')
  }



  render(){
    return (
      <div>
      <img
        src={!this.state.isScrolledIntoView ? 'http://s0.hao123img.com/res/img/richanglogo168_24.png' : this.props.imgSource}
        ref={(node)=>this.imgNode = node}

      />
      </div>
    )
  }
}
