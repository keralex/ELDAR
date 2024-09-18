import React from 'react';
import SignIn from '../../organisms/SignIn';
import { useLocation } from 'react-router-dom';
import SignUp from '../../organisms/SignUp';

const Login = (): React.ReactNode => {
	const location = useLocation();
	return location.pathname === '/register' ? <SignUp /> : <SignIn />;
};

export default Login;
