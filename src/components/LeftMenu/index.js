import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



export default class LeftMenu extends Component{
    constructor(props){
        super(props)
    }


    render(){

        return (
            <div className="left-nav">
              <h2>React demo列表</h2>
              <ul>
                <li><Link to="/calendar">日历demo</Link></li>
                <li><Link to="/scrollbar">模拟滚动条demo</Link></li>
                <li><Link to="/lightbox">图片</Link></li>
                <li><Link to="/maskdemo">遮罩层</Link></li>
                <li><Link to="/scroll">滚动</Link></li>
                <li><Link to="/drag">HTML5拖拽</Link></li>
                <li><Link to="/sortable">拖拽排序</Link></li>
                <li><Link to="/testbabel">测试Babel</Link></li>
              </ul>
            </div>
        )
    }
}
