import { Outlet } from "react-router-dom";
import Login from "../Pages/Login";

function NoLayout() {
  return (
    <>
      <Outlet />
    </>
  )
}

export default NoLayout