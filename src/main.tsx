import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';
import './index.css';
import { AuthProvider } from './providers/authProvider';
import Login from './components/pages/Login';
import ProtectedRoute from './components/templates/ProtectedRoute';
import Posts from './components/pages/Posts';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<AuthProvider>
			<ThemeProvider theme={theme} >
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<Login />} />
						<Route path='/register' element={<Login />} />
						<Route
							path='/posts'
							element={
								<ProtectedRoute>
									<Posts />
								</ProtectedRoute>
							}
						/>
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
		</AuthProvider>
	</StrictMode >,
);
