import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

import './index.less'



export default  class Calendar extends Component{

    constructor(props, context) {
        super(props, context)
    }

    componentDidMount = ()=>{

    }

    componentWillReceiveProps(nextProps){

    }

    handleClickCell(date){
        const d = new Date(date.date)
        console.log(`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`)
    }

    renderMonthTd(){
        //以当前月的第一天为参考点，利用setDate()获取日期
        //setDate()会自动转化日期，传入负值，获取上个月的日期，传入超过本月的天数，获取下一个月的日期
        //debugger
        let d = new Date(this.props.date)
        const yy = d.getFullYear()
        const mm = d.getMonth()
        const dd = d.getDate()
        //当前月有多少天
        // new Date(2017,4,0).getDate() 获取的是4月份的总天数
        // !!!注意区别: new Date(2017,4,1) 获取的是五月份的信息
        const totalDays = new Date(yy,mm+1,0).getDate()
        //console.log(new Date(yy,mm,1).getDay())
        //上个月有多少天
        //const prevTotalDays = new Date(yy,mm-1,0).getDate()

        //获取当前月的第一天是周几
        // new Date('2017-4-1').getDay() 获取的是
        let firstDayWeek = new Date(`${yy}-${mm+1}-1`).getDay()
        firstDayWeek = firstDayWeek === 0 ? 7 : firstDayWeek
        const trArr = []

        const totalCells = Math.ceil((firstDayWeek+totalDays)/7)*7
        //设置累加的起始点，起始点就是2减去当前月第一天是周几
        let num = 2-firstDayWeek
        for(let i=0;i < Math.ceil((firstDayWeek+totalDays)/7);i++){

            const tdArr = [];
            for(let j=0;j < 7;j++){
                let date = new Date(yy,mm,1)
                date.setDate(num)
                tdArr.push(
                  <td
                    style={ num < 0 || num === 0 || (num > totalDays) ? { background:'#eee'} : null}
                    onClick={ this.handleClickCell.bind(this,{date}) }
                  >
                  { (date.getMonth() === mm) && date.getDate() === dd ? <span className="day current-day">{ date.getDate() }</span> : <span className="day">{date.getDate()}</span> }
                  </td>
              )
                num++
            }
            trArr.push(<tr key={i}>{tdArr}</tr>)
        }
        return trArr
    }
    render() {
        return (
          <table>
              <thead>
                <tr>
                    <th>周一</th>
                    <th>周二</th>
                    <th>周三</th>
                    <th>周四</th>
                    <th>周五</th>
                    <th>周六</th>
                    <th>周日</th>
                </tr>
              </thead>
              <tbody>
                {this.renderMonthTd()}
              </tbody>
          </table>
        );
    }
}
