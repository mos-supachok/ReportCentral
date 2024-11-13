import Navbar from './Components/Navbar'
import "./App.css";
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import { Flex, Layout, theme, } from 'antd';
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import History from "./Pages/History";
import Create from "./Pages/Create";
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
        <Route path="*" element={<NotFound />} />
        <Route index element={<Login />}></Route>
      </Route>
      <Route path='/report' element={<ReportLayout />}>
        <Route path='/report/profile' element={<Profile />} />
        <Route path='/report/home' element={<Home />} />
        <Route path='/report/history' element={<History />} />
        <Route path='/report/create' element={<Create />} />
        <Route path='/report/users' element={<Users />} />
        <Route path='/report/help' element={<Help />} />
        <Route index path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
