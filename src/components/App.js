import React, { Component, PropTypes } from 'react'
import { Layout, Icon, Modal } from 'antd';
const { Header, Sider, Content } = Layout;
import LeftMenu from './LeftMenu';



export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {
          collapsed: false,
        };
    }
    componentDidMount(){
      this.welcomeLab()
    }
    welcomeLab() {
      Modal.info({
        title: '来自世界最友好的提示',
        content: (
          <div>
            <p>这是一个react 组件实验室平台，这个平台集成了React 、ES2015、 Babel、Ant.design 。你可以在平台随意写你的react代码，而不用担心环境配置问题。</p>
          </div>
        ),
        onOk() {},
      });
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
