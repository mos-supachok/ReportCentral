import Navbar from './Components/Navbar'
import "./App.css";
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import { Flex, Layout, theme, } from 'antd';
import Home from "./Pages/Home";
import MoM_history from "./Pages/MoM_history";
import MoM_create from "./Pages/MoM_create";
import GP_history from "./Pages/GP_history";
import GP_create from "./Pages/GP_create";
import Users from "./Pages/Users";
import Help from "./Pages/Help";
import Sider from 'antd/es/layout/Sider';
import LoginLayout from './Layout/LoginLayout';
import ReportLayout from './Layout/ReportLayout';
import NotFound from './Pages/NotFound';
import NoLayout from './Layout/LoginLayout';
import Login from './Pages/Login';

const { Content, Footer } = Layout;

function App() {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Routes>
      <Route path="/" element={<NoLayout />}>
        <Route index element={<Login />}></Route>
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path='/report' element={<ReportLayout />}>
        <Route path='/report/home' element={<Home />} />
        <Route path='/report/mom_history' element={<MoM_history />} />
        <Route path='/report/mom_create' element={<MoM_create />} />
        <Route path='/report/gp_history' element={<GP_history />} />
        <Route path='/report/gp_create' element={<GP_create />} />
        <Route path='/report/users' element={<Users />} />
        <Route path='/report/help' element={<Help />} />
        <Route index path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
