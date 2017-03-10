/**
 * Created by leesx on 2016/6/20.
 */
import React, { Component, PropTypes } from 'react'

export default  class NoMatch extends Component{

    constructor(props, context) {
        super(props, context)

    }


    render() {


        return (
            <div className="no-match">
                <h1>404找不到</h1>
                <img src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3937685891,301028235&fm=58"/>
            </div>
        );
    }
}
