import React, {Component, useReducer, useRef,useContext, useState} from 'react';
import { Route} from "react-router-dom";
import 'antd/dist/antd.css';
import {Link}  from 'react-router-dom';
import { Layout, Menu,Button, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const routes =[{path:'/user/admin', sidebar: ()=> <div>admin!</div>,main: ()=> <h2>User/Admin</h2>},
{path:'/user/superadmin', sidebar: ()=> <div>superadmin!</div>,main: ()=> <h2>User/SuperAdmin</h2>},
{path:'/user/customer', sidebar: ()=> <div>customer!</div>,main: ()=> <h2>User/Customer</h2>},
{path:'/list', sidebar: ()=> <div>list!</div>,main: ()=> <h2>List</h2>},
{path:'/option1', sidebar: ()=> <div>option1!</div>,main: ()=> <h2>Option1</h2>},
{path:'/option2', sidebar: ()=> <div>option2!</div>,main: ()=> <h2>Option2</h2>}]

function AdminLayout({children}) {
  const [collapsed, setCollapsed] = useState("")
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapsed={setCollapsed}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
             <Link to ='/option1'> Option 1</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link to ='/option2'> Option 2</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Хэрэглэгч бүртгэл">
              <Menu.Item key="3"><Link to="/user/superadmin">SuperAdmin</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/user/admin">Admin</Link></Menu.Item>
              <Menu.Item key="5"><Link to="/user/customer">Customer</Link></Menu.Item>
            </SubMenu>
            <Menu.Item key="9"  icon={<FileOutlined />}>
            <Link to="/list">List</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>
              {routes.map((route)=>(
                <Route key={route.path}
                path={route.path} 
                component={route.main}/>
              ))}
              </Breadcrumb.Item>
              
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {children}
            </div>
            
          </Content>
          <Footer style={{ textAlign: 'center' }}>2021</Footer>
        </Layout>
      </Layout>
    );
  }
export default AdminLayout;
