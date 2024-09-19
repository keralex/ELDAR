import React from 'react';
import { useLocation } from 'react-router-dom';
import SignIn from '../../organisms/SignIn';
import SignUp from '../../organisms/SignUp';
import { Box } from '@mui/material';
import { getContainerStyles, getBoxStyles, getLoginStyles, getImageStyles } from './Login.styles';

const Login = (): React.ReactNode => {
	const location = useLocation();

	return (
		<Box sx={getContainerStyles()}>
			<Box sx={getBoxStyles()}>
				<Box sx={getLoginStyles()}>
					{location.pathname === '/register' ? <SignUp /> : <SignIn />}
				</Box>
				<Box sx={getImageStyles()}></Box>
			</Box>
		</Box>
	)

};

export default Login;
