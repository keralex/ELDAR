import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../providers/authProvider';

interface PrivateRouteProps {
	children: JSX.Element;
}

const ProtectedRoute: React.FC<PrivateRouteProps> = ({ children }) => {
	const { user } = useAuth();

	if (!user) {
		return <Navigate to='/' />;
	}

	return children;
};

export default ProtectedRoute;
