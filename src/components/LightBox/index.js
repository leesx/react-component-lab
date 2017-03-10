import React, { Component, PropTypes } from 'react'
import Lightbox from 'react-images';



export default class LightBoxDemo extends Component{
    constructor(props) {
        super(props)
        this.state = {
            lightboxIsOpen:true,
        }
    }

    closeLightbox = ()=>{
        this.setState({
            lightboxIsOpen:false,
        })
    }

    gotoPrevLightboxImage = ()=>{

    }

    gotoNextLightboxImage = ()=>{

    }

    render() {
        return (
            <div className="lightbox-wrap">
            <Lightbox
                images={[
                { src: 'http://img4.imgtn.bdimg.com/it/u=2119752494,3701811072&fm=21&gp=0.jpg' },
                { src: 'http://img1.imgtn.bdimg.com/it/u=1802049830,3624388341&fm=21&gp=0.jpg' }
                ]}
                isOpen={this.state.lightboxIsOpen}
                onClickPrev={this.gotoPrevLightboxImage}
                onClickNext={this.gotoNextLightboxImage}
                onClose={this.closeLightbox}
                />
            </div>
        );
    }
}
