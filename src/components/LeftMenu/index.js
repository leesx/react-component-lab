import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { Menu, Icon, Switch } from 'antd';
const SubMenu = Menu.SubMenu;



export default class LeftMenu extends Component{
    constructor(props){
        super(props)
    }


    render(){

        return (
          <Menu

             defaultOpenKeys={['sub1']}
             theme="dark"
             mode="inline"
          >
             <SubMenu key="sub1" title={<span><Icon type="mail" /><span>图片类</span></span>}>
               <Menu.Item key="2">
                 <Link to="/calendar">日历demo</Link>
               </Menu.Item>
               <Menu.Item key="3">
                 <Link to="/scrollbar">模拟滚动条demo</Link>
               </Menu.Item>
               <Menu.Item key="4">
                 <Link to="/lazyimage">图片延迟</Link>
               </Menu.Item>
               <Menu.Item key="5">
                 <Link to="/lightbox2">仿照lightbox2</Link>
               </Menu.Item>
               <Menu.Item key="6">
                 <Link to="/maskdemo">遮罩层</Link>
               </Menu.Item>
               <Menu.Item key="7">
                 <Link to="/scroll">滚动</Link>
               </Menu.Item>
               <Menu.Item key="8">
                 <Link to="/sortable">拖拽排序</Link>
               </Menu.Item>
             </SubMenu>
             <SubMenu key="sub2" title={<span><Icon type="mail" /><span>工具类</span></span>}>
               <Menu.Item key="1">
                 <Link to="/calendar">日历demo</Link>
               </Menu.Item>
               <Menu.Item key="2">
                 <Link to="/calendar">日历demo</Link>
               </Menu.Item>
               <Menu.Item key="3">
                 <Link to="/scrollbar">模拟滚动条demo</Link>
               </Menu.Item>
               <Menu.Item key="4">
                 <Link to="/lightbox">图片</Link>
               </Menu.Item>
               <Menu.Item key="5">
                 <Link to="/lightbox2">仿照lightbox2</Link>
               </Menu.Item>
               <Menu.Item key="6">
                 <Link to="/maskdemo">遮罩层</Link>
               </Menu.Item>
               <Menu.Item key="7">
                 <Link to="/scroll">滚动</Link>
               </Menu.Item>
               <Menu.Item key="8">
                 <Link to="/sortable">拖拽排序</Link>
               </Menu.Item>
               <Menu.Item key="9">
                 <Link to="/testbabel">测试Babel</Link>
               </Menu.Item>
             </SubMenu>
             <SubMenu key="sub3" title={<span><Icon type="mail" /><span>Babel测试类</span></span>}>
               <Menu.Item key="1">
                 <Link to="/calendar">日历demo</Link>
               </Menu.Item>
             </SubMenu>
          </Menu>
        )
    }
}
