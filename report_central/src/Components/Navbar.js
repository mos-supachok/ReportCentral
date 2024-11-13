import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { FileOutlined, AlertOutlined, UserOutlined, HomeOutlined, DownOutlined, } from '@ant-design/icons';
import { Flex, Layout, Menu, theme, Image, Avatar, Dropdown, Space } from 'antd';
import logo from './image/PTT_RAISE_logo.png';
import user_picture from './image/user_picture.png';

const { Sider } = Layout;
const siderStyle = {
  overflow: 'visible',
  height: '100vh',
  position: 'fixed',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
};

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const Username = 'Username';
const menu = (
  <Menu>
    <Menu.Item><Link to='/report/profile'>User profile</Link></Menu.Item>
    <Menu.Item danger><Link to='/'>Logout</Link></Menu.Item>
  </Menu>
);


const items = [
  getItem(<Link to='/report/home'>Home</Link>, '1', <HomeOutlined />),
  getItem('Report', 'sub1', <FileOutlined />, [
    getItem(<Link to='/report/history'>History</Link>, '2'),
    getItem(<Link to='/report/create'>Create</Link>, '3'),
  ]),
  getItem(<Link to='/report/users'>Users</Link>, '4', <UserOutlined />,),
  getItem(<Link to='/report/help'>Help</Link>, '5', <AlertOutlined />,),
];

function Navbar() {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout hasSider style={{ minHeight: '100vh' }}>
      <Sider style={siderStyle}>
        <Image preview={false} src={logo} width='100%' style={{ backgroundColor: '#44546A' }} />
        <h1 style={{ textAlign: 'center', color: '#FFFFFF' }}>Report Central</h1>
        <Flex vertical align='center' sstyle={{ padding: '0px 0px 10px 0px' }}>
          <Image preview={true} src={user_picture} width='60%'></Image>
          <Dropdown overlay={menu}>
            <a style={{ width: '80%', margin: '20px', textAlign: 'center' }} onClick={(e) => e.preventDefault()}>
              <Space style={{ fontSize: '1rem', color: '#FFFFFF' }}>{Username}<DownOutlined /></Space>
            </a>
          </Dropdown>
        </Flex>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
    </Layout>
  );
}

export default Navbar;
