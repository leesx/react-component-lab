import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

export default  class CalendarWeek extends Component{

    constructor(props, context) {
        super(props, context)
        // let d = new Date()
        // this.state = {
        //      yy : d.getFullYear(),
        //      mm : d.getMonth(), // 配套格式 new Date(yy,mm,dd). 如果月份加一，格式为 new Date('yy-mm-dd')
        //      dd : d.getDate(),
        // };
    }

    componentDidMount = ()=>{

    }

    componentWillReceiveProps(nextProps){
      // if(nextProps.date){
      //   let d = new Date(nextProps.date)
      //   this.setState({
      //        yy : d.getFullYear(),
      //        mm : d.getMonth(),
      //        dd : d.getDate(),
      //   })
      // }
    }


    renderWeekTd(){
      let d = new Date(this.props.date)
      const yy = d.getFullYear()
      const mm = d.getMonth()
      const dd = d.getDate()
      
      const weekStr = '一二三四五六日'
      // const {yy,mm,dd} = this.state
      //获取当前是周几
      let curDayWeek = new Date(yy,mm,dd).getDay()
      curDayWeek = curDayWeek === 0 ? 7 : curDayWeek
      const tdArr = []

      for(let j=1;j<=7;j++){
        let date = new Date(yy,mm,dd-curDayWeek+j)
        tdArr.push(
          <th>
            <span className={curDayWeek === j ? 'current-week' : null}>
              {`周${weekStr[j-1]}/${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`}
            </span>
          </th>
        )
      }

      return tdArr;

    }
    render() {
        return (
          <table>
              <thead>
                <tr>
                    {this.renderWeekTd()}
                </tr>
              </thead>
              <tbody>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tbody>
          </table>
        );
    }
}
