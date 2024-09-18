import React, { createContext, useContext, useState } from 'react';
import { AuthContextType, User } from './authProvider.interface';

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

const isOdd = (num: number): boolean => {
	return num % 2 !== 0;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [userData, setUserData] = useState<User | null>(() => {
		const storedUser = localStorage.getItem('user');
		return storedUser ? JSON.parse(storedUser) : null;
	});
	const [error, setError] = useState<string | null>(null);

	const login = async (email: string) => {
		const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${email}`);
		if (!response.ok) {
			setError('Network response was not ok');
			throw new Error('Network response was not ok');
		}

		const data: User[] = await response.json();
		const roletype = isOdd(data[0].id) ? 'admin' : 'user';
		const user: User = { ...data[0], role: roletype }
		setUserData(user);
		localStorage.setItem('user', JSON.stringify(user));
	};

	const logout = () => {
		setUserData(null);
		localStorage.removeItem('user');
	};

	return (
		<AuthContext.Provider value={{ user: userData, authError: error, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
