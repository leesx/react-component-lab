import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

export default  class CalendarYear extends Component{

    constructor(props, context) {
        super(props, context)
    }

    componentDidMount = ()=>{

    }

    componentWillReceiveProps(nextProps){

    }


    renderYearTd(){
      const tdArr = []

      for(let j=0;j<12;j++){

        tdArr.push(
          <th>{`${j+1}月`}</th>
        )
      }

      return tdArr;

    }
    render() {
        return (
          <table>
              <thead>
                <tr>
                    {this.renderYearTd()}
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
