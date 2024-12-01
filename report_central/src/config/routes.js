import ProfilePage from "../Pages/Profile";
import Home from "../Pages/Home";
import History from "../Pages/History";
import Report from "../Pages/Report";
import Create from "../Pages/Create";
import Users from "../Pages/Users";
import Help from "../Pages/Help";
import ReportPage from '../Layout/ReportLayout';
import NotFound from '../Pages/NotFound';
import LoginPage from '../Layout/LoginLayout';
import Login from '../Pages/Login';
import RegisterPage from '../Pages/Register'
import { redirect } from "react-router-dom";

const components = {
	report: {
		url: '/report',
		component: ReportPage
	},
	login: {
		url: '/',
		component: LoginPage
	},
	register: {
		url: '/register',
		component: RegisterPage
	}
}

//Role ไหนเข้าหน้าไหนได้บ้าง
export default {
	guest: {
		allowedRoutes: [
			components.login,
			components.register,
		],
		redirectRoutes: '/'
	},
	user: {
		allowedRoutes: [
			components.report,
		],
		redirectRoutes: '/report'
	},
}