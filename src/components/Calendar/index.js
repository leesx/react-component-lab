/**
 * Created by leesx on 2017/4/6.
 */
import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

import './index.less'

import CalendarWeek from './Week'
import CalendarMonth from './Month'
import CalendarYear from './Year'

export default  class Calendar extends Component{

    constructor(props, context) {
        super(props, context)

        let d = new Date()
        this.state = {
             yy : d.getFullYear(),
             mm : d.getMonth(), // 配套格式 new Date(yy,mm,dd). 如果月份加一，格式为 new Date('yy-mm-dd')
             dd : d.getDate(),
             selected: 'month',
        };
    }

    componentDidMount = ()=>{

    }
    handleMonthClick(dir){

        let { yy ,mm,dd,selected} = this.state

        if(selected === 'month'){
          this.setState(
              {
                  mm: dir === 2 ? mm+1 : m-1
              }
          )
        }else if(selected === 'week'){
          this.setState(
              {
                  dd: dir === 2? dd+7:dd-7
              }
          )
        }else{
          this.setState(
              {
                  yy: dir === 2 ? yy+1:yy-1
              }
          )
        }

    }
    renderTd(){
      const {yy,mm,dd} = this.state
      const date =  new Date(yy,mm,dd)
      const selected = this.state.selected

      if(selected === 'month'){
        return (
          <div className="fc-view fc-month-view fc-basic-view">
            <CalendarMonth date={date} />
          </div>
        )
      }else if(selected === 'week'){
        return (
          <div className="fc-view fc-week-view fc-basic-view">
            <CalendarWeek date={date} />
          </div>
        )
      }

      return (
        <div><CalendarYear date={date} /></div>
      )
    }
    seletedMode(mode){
      this.setState({
        selected:mode
      })
    }
    renderTit(){
      const {yy,mm,dd,selected} = this.state

      if(selected === 'month'){
        const date =  new Date(yy,mm,dd)
        return (
          <h2>{ date.getFullYear() } 年 { date.getMonth()+1} 月</h2>
        )
      }else if(selected === 'week'){
        let firstDayWeek = new Date(yy,mm,dd).getDay()
        firstDayWeek = firstDayWeek === 0 ? 7 : firstDayWeek
        const begin = new Date(yy,mm,dd-firstDayWeek+1)
        const end = new Date(yy,mm,dd-firstDayWeek+7)

        return (
          <h2>
            { begin.getFullYear() } / { begin.getMonth()+1} / { begin.getDate()} ~
            { end.getFullYear() } / { end.getMonth()+1} / { end.getDate()}

          </h2>
        )
      }
      const date =  new Date(yy,mm,dd)
      return <h2>{date.getFullYear()}</h2>;
    }
    handleClickToday=()=>{
      const date = new Date()
      this.setState({
        yy:date.getFullYear(),
        mm:date.getMonth(),
        dd:date.getDate(),
      })
    }
    render() {
      const {yy,mm,dd,selected} = this.state
      const date =  new Date(yy,mm,dd)

        return (
            <div className="fc fc-unthemed fc-ltr">
                <div className="fc-toolbar fc-header-toolbar">
                  <div className="fc-left">
                    <div className="fc-button-group">
                      <button className="fc-prev-button fc-button fc-state-default fc-corner-left" onClick={ this.handleMonthClick.bind(this,1) }>
                        <span className="fc-icon fc-icon-left-single-arrow"></span>
                      </button>
                      <button className="fc-next-button fc-button fc-state-default fc-corner-right" onClick={ this.handleMonthClick.bind(this,2) }>
                        <span className="fc-icon fc-icon-right-single-arrow"></span>
                      </button>
                    </div>
                    <button onClick={this.handleClickToday} className="fc-today-button fc-button fc-state-default fc-corner-left fc-corner-right fc-state-disabled">今天</button>
                  </div>

                  <div className="fc-right">
                      <div className="fc-button-group">
                          <button type="button" onClick={this.seletedMode.bind(this,'month')} className={`fc-month-button fc-button fc-state-default fc-corner-left ${ selected === 'month' ? 'fc-state-active' : null}`}>月</button>
                          <button type="button" onClick={this.seletedMode.bind(this,'week')} className={`fc-agendaWeek-button fc-button fc-state-default ${ selected === 'week' ? 'fc-state-active' : null}`}>周</button>
                          <button type="button" onClick={this.seletedMode.bind(this,'year')} className={`fc-agendaDay-button fc-button fc-state-default ${ selected === 'year' ? 'fc-state-active' : null}`}>年</button>
                      </div>
                  </div>
                  <div className="fc-center">
                    {this.renderTit()}
                  </div>
                </div>
                <div className="fc-view-container">
                  {this.renderTd()}
                </div>
            </div>
        );
    }
}
