import Navbar from '../Components/Navbar'
import "../App.css";
import { Outlet } from 'react-router-dom'
import { Layout, } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content, } from 'antd/es/layout/layout';


function ReportLayout() {

  return (
    <Layout>
      <Sider>
        <Navbar />
      </Sider>
      <Content style={{ margin: '24px 16px', }}>
        <Outlet />
      </Content>
    </Layout>
  )
}

export default ReportLayout