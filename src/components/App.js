import React, { Component, PropTypes } from 'react'
import { Layout, Icon } from 'antd';
const { Header, Sider, Content } = Layout;
import LeftMenu from './LeftMenu';

export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {
          collapsed: false,
        };
    }

    toggle=()=>{
      this.setState({
        collapsed: !this.state.collapsed,
      });
    }

    render(){
        return (
          <Layout className="rc-lab-layout">
            <Sider
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
            >
              <div className="sider-logo" >
                <span>React Component Lab</span>
                <h2>React 组件实验室</h2>
              </div>
              <LeftMenu />
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
              </Header>
              <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                {this.props.children}
              </Content>
            </Layout>
          </Layout>
        )

    }


}
