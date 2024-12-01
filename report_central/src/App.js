import "./App.css";
import React, { useEffect, useState } from 'react';
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
import LoginLayout from './Layout/LoginLayout';
import Login from './Pages/Login';
import Register from './Pages/Register'
import PrivateRoutes from "./Components/private-routes/PrivateRoutes";
import useLocalStorage from "./hooks/useLocalStorage";
import { userStore } from "./stores/userStore";
import { StoreProvider } from 'easy-peasy'

function App() {
  // const user = {}

  // const [role, setRole] = useState('admin');
  // const [role, setRole] = useState('user');

  useEffect(() => {
    // TODO: get user role detail (จาก backend)
  }, [])

  // Route
  // -- element (ใน outlet)

  // ตรง render <ReportLayout />
  // <PrivateRoutes role={role} expectedRoles={['admin']}>
  //   <ReportLayout />
  // </PrivateRoutes>

  // ไม่ตรง
  // <Route path='/report' element={<PrivateRoutes role={role} expectedRoles={['admin']}>
  //   <Navigate to={redirectRoute} />
  // </PrivateRoutes>}>

  return (
    <StoreProvider store={userStore}>
      <Routes>
        <Route path="/" element={<LoginLayout />}>
          <Route path="*" element={<NotFound />} />
          <Route index element={
            <Login />
          }></Route>
          <Route path='/register' element={<Register />} />
        </Route>
        <Route path='/report' element={
          <PrivateRoutes expectedRoles={['admin', 'user']}>
            <ReportLayout />
          </PrivateRoutes>
        }>
          <Route path='/report/profile' element={<Profile />} />
          <Route path='/report/home' element={<Home />} />
          <Route path='/report/history' element={<History />} />
          <Route path='/report/report' element={<Report />} />
          <Route path='/report/create' element={<Create />} />
          <Route path='/report/users' element={
            <PrivateRoutes redirectRoute={'/report/home'} expectedRoles={['admin']}>
              <Users />
            </PrivateRoutes>
          } />
          <Route path='/report/help' element={<Help />} />
          <Route index path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </StoreProvider>
  );
}

export default App;
