import Navbar from '../Components/Navbar'
import "../App.css";
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import { Flex, Layout, theme, } from 'antd';
import Home from "../Pages/Home";
import MoM_history from "../Pages/MoM_history";
import MoM_create from "../Pages/MoM_create";
import GP_history from "../Pages/GP_history";
import GP_create from "../Pages/GP_create";
import Users from "../Pages/Users";
import Help from "../Pages/Help";
import Sider from 'antd/es/layout/Sider';
import { Content, Footer } from 'antd/es/layout/layout';


function ReportLayout() {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider>
        <Navbar />
      </Sider>
      <Content style={{ margin: '24px 16px', }}>
        <div style={{ padding: 24, minHeight: 360, background: colorBgContainer, borderRadius: borderRadiusLG, }}>
          <Outlet />
        </div>
        <Footer style={{ textAlign: 'center', }}>
          PTT RAiSE Report Central created by S.Supachok
        </Footer>
      </Content>
    </Layout>
  )
}

export default ReportLayout