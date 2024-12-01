import React from 'react'
import ConfigRoutes from '../../config/routes'
import { Navigate, Routes, Route, Outlet, useNavigate } from 'react-router-dom'
import { useStoreState } from 'easy-peasy'

function PrivateRoutes(props) {
	const children = props.children

	// const role = props.role || 'guest';
	const expectedRoles = props.expectedRoles || [];
	const redirectRoute = props.redirectRoute || '/'

	const role = useStoreState((state) => state.user.role);

	return expectedRoles.includes(role) ? children : <Navigate to={redirectRoute} />;
}

export default PrivateRoutes