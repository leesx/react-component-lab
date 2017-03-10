import React, { Component, PropTypes } from 'react'
import { Card, Spin } from 'antd';
import { findDOMNode } from 'react-dom'

export default class ScrollDemo extends Component{
    constructor(props) {
        super(props)
        this.state={
            data:[{
                name:'kk',
                desc:'北京'
            },{
                name:'kk',
                desc:'北京'
            },{
                name:'kk',
                desc:'北京'
            },{
                name:'kk',
                desc:'北京'
            },{
                name:'kk',
                desc:'北京'
            },{
                name:'kk',
                desc:'北京'
            },{
                name:'kk',
                desc:'北京'
            },{
                name:'kk',
                desc:'北京'
            },{
                name:'kk',
                desc:'北京'
            },{
                name:'kk',
                desc:'北京'
            }],
            page:1,
            moreLoading:false
        }
    }

    componentDidMount(){
        const el = findDOMNode(this.refs.cardContainer)


        el.onscroll=()=>{
            console.log('内容高度'+el.scrollHeight)
            console.log(el.scrollTop)
            if(el.scrollHeight -(el.scrollTop+el.offsetHeight) < 30 ){


                this.setState({
                    moreLoading:true,

                })

                setTimeout(()=>{
                    const d = this.state.data.push({
                        name:'kk',
                        desc:'北京'
                    })
                    this.setState({
                        moreLoading:false,
                        data:this.state.data
                    })
                },2000)
            }
        }
    }

    renderCardList(){
        const d = this.state.data
        return d.map((item,index)=>{
            return (
                <Card style={{ width: 240 }} key={index} bodyStyle={{ padding: 5 }}>
                    <div className="custom-image">
                      <img alt="example" width="100%" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                    </div>
                    <div className="custom-card">
                      <h3>{`${index+1}-${item.name}`}</h3>
                      <p>{item.desc}</p>
                    </div>
                </Card>
            )
        })
    }

    render() {
        return (
            <div className="card-container" ref="cardContainer">
                {this.renderCardList()}
                <div><Spin spinning={this.state.moreLoading} > 拼命加载中....</Spin></div>
            </div>
        )
    }
}
