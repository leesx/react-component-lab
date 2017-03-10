/**
 * Created by leesx on 2016/6/20.
 */
import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

import './App.css'
import Mask from '../Mask'
export default  class Calendar extends Component{

    constructor(props, context) {
        super(props, context)
        let d = new Date()
        this.state = {

             yy : d.getFullYear(),
             mm : d.getMonth()+1,
             dd : d.getDate(),
        };
    }

    componentDidMount = ()=>{

        //findDOMNode().appendChild('<div></div>')
        //document.body.appendChild(findDOMNode(this.refs.mask))
    }

    handleClickCell(date){
        const d = new Date(date.date)
        console.log(`${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`)
    }

    renderTd(){
        //以当前月的第一天为参考点，利用setDate()获取日期
        //setDate()会自动转化日期，传入负值，获取上个月的日期，传入超过本月的天数，获取下一个月的日期
        //
        const {yy,mm,dd} = this.state
        //当前月有多少天
        const totalDays = new Date(yy,mm,0).getDate()
        //上个月有多少天
        //const prevTotalDays = new Date(yy,mm-1,0).getDate()

        //获取当前月的第一天是周几
        let firstDayWeek = new Date(yy,mm,1).getDay()
        firstDayWeek = firstDayWeek === 0 ? 7 : firstDayWeek
        const trArr = []

        const totalCells = Math.ceil((firstDayWeek+totalDays)/7)*7
        //设置累加的起始点，起始点就是2减去当前月第一天是周几
        let num = 2-firstDayWeek
        for(let i=0;i < Math.ceil((firstDayWeek+totalDays)/7);i++){

            const tdArr = [];
            for(let j=0;j < 7;j++){
                let date = new Date(`${yy}-${mm}-01`)
                date.setDate(num)
                tdArr.push(<td style={ num < 0 || num === 0 || num > (totalDays) ? { background:'#eee'} : null}  onClick={ this.handleClickCell.bind(this,{date}) }>{ date.getDate() === dd ? <div style={{backgroundColor:'#f60'}}>{ date.getDate() }</div> : date.getDate() }</td>)
                num++
                /*if(num < firstDayWeek){
                    const day = prevTotalDays - firstDayWeek +2+j
                    let date = new Date(`${yy}-${mm}-01`)
                    date.setDate(-(firstDayWeek -2-j))

                	tdArr.push(<td style={{background:'#eee'}}  onClick={ this.handleClickCell.bind(this,{date}) }>{ date.getDate() }</td>)
                }else if(num > totalDays+firstDayWeek ||  num == totalDays+firstDayWeek){
                    //const day = (num-firstDayWeek-totalDays)+1
                    let date = new Date(`${yy}-${mm}-01`)
                    date.setDate((num-firstDayWeek-totalDays)+1)

                	tdArr.push(<td style={{background:'#eee'}} onClick={ this.handleClickCell.bind(this,{date}) }>{date.getDate()}</td>)
                }else{
                    //const day = num-firstDayWeek+1
                    let date = new Date(`${yy}-${mm}-01`)
                    date.setDate(num-firstDayWeek+1)
					tdArr.push(<td onClick={ this.handleClickCell.bind(this,{date})}>{ date.getDate() }</td>)
                }*/

            }
            trArr.push(<tr key={i}>{tdArr}</tr>)
        }



        return trArr

    }

    handleMonthClick(dir){

        let { yy ,mm} = this.state
        //下一月
        if(dir === 2){
            mm++
            this.setState(
                {
                    mm: mm > 12 ? 1 : mm,
                    yy:mm > 12 ? yy+ 1: yy
                }
            )
        }else if(dir === 1){
            mm--
            this.setState(
                {
                    mm: mm == 0 ? 12 : mm,
                    yy: mm == 0 ? yy- 1: yy
                }
            )
        }


    }


    render() {
        const date =  new Date(`${this.state.yy}-${this.state.mm}-${this.state.dd}`)

        return (
            <div className="self-calendar">
                
                <button onClick={ this.handleMonthClick.bind(this,1) }>上一月</button>
                <button onClick={ this.handleMonthClick.bind(this,2) }>下一月</button>
                <div>{  date.getFullYear() } - { date.getMonth()+1} -{date.getDate()}</div>
                <table >
                    <tbody>
                    <tr className="c-header">
                        <td>一</td>
                        <td>二</td>
                        <td>三</td>
                        <td>四</td>
                        <td>五</td>
                        <td>六</td>
                        <td>日</td>
                    </tr>
                    { this.renderTd() }
                    </tbody>
                </table>
            </div>
        );
    }
}
