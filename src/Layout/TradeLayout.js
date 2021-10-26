import React from 'react'
import {Link}  from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { maintrade} from '../Assets/css/maintrade.css';
import { Content } from 'antd/lib/layout/layout';

const { Header} = Layout;

function TradeLayout({children}){
  return(
    <Layout className="layout">
    <Header >
      <div className="logo" ><Link to='/main'></Link></div>
      <Menu className='flex' theme="dark" mode="horizontal">
        <Menu.Item><Link to='/trading'>Арилжаа</Link></Menu.Item>
        <Menu.Item><Link to='/wallet'>Хэтэвч</Link></Menu.Item>
        <Menu.Item  className='profile'><Link to='/profile'>Boldko@gmail.com</Link></Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 0px' }}>
      <div className="site-layout-content">{children}</div>
    </Content>
    
  </Layout>
  )
      }
export default TradeLayout;
