import "./App.css";
import { Routes, Route, } from 'react-router-dom'
import { Flex, Layout, theme, } from 'antd';
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import History from "./Pages/History";
import Report from "./Pages/Report";
import Create from "./Pages/Create";
import Users from "./Pages/Users";
import Help from "./Pages/Help";
import ReportLayout from './Layout/ReportLayout';
import NotFound from './Pages/NotFound';
import NoLayout from './Layout/LoginLayout';
import Login from './Pages/Login';
import Register from './Pages/Register'

function App() {
  return (
    <Routes>
      <Route path="/" element={<NoLayout />}>
        <Route path="*" element={<NotFound />} />
        <Route index element={<Login />}></Route>
        <Route path='/report/register' element={<Register />} />
      </Route>
      <Route path='/report' element={<ReportLayout />}>
        <Route path='/report/profile' element={<Profile />} />
        <Route path='/report/home' element={<Home />} />
        <Route path='/report/history' element={<History />} />
        <Route path='/report/report' element={<Report />} />
        <Route path='/report/create' element={<Create />} />
        <Route path='/report/users' element={<Users />} />
        <Route path='/report/help' element={<Help />} />
        <Route index path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
