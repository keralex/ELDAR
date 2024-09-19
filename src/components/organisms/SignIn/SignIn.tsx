import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../providers/authProvider';

const SignIn = (): React.ReactNode => {
	const { login } = useAuth();
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState<string | null>(null);
	const [passwordError, setPasswordError] = useState<string | null>(null);

	// Expresión regular para validar el formato del email
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		let isValid = true;

		// Validar email
		if (!emailRegex.test(email)) {
			setEmailError('Invalid Email');
			isValid = false;
		} else {
			setEmailError(null);
		}

		// Validar password (ejemplo: mínimo 6 caracteres)
		if (password.length >= 8 && password.length <= 10) {
			setPasswordError(null);
		} else {
			isValid = false;
			setPasswordError('The password must be 8 to 10 characters long.');
		}

		// Si ambos son válidos, puedes enviar el formulario
		if (isValid) {
			try {
				await login(email);
				navigate('/posts');
			} catch (error) {
				console.log(error)
			}
		}
	};

	return (
		<Box>
			<Typography variant="h2">Welcome</Typography>
			<Typography mb='2rem'>Sign in to explore and manage your posts seamlessly. Let's get you connected.</Typography>
			<form onSubmit={handleSubmit} noValidate>
				<Typography>Email</Typography>
				<TextField
					id='email'
					variant='outlined'
					placeholder='example@email.com'
					type='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					error={!!emailError}
					helperText={emailError || ''}
					fullWidth
				/>
				<Typography>Password</Typography>
				<TextField
					id='password'
					variant='outlined'
					placeholder='at least 8 characters'
					fullWidth
					margin='normal'
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					error={!!passwordError}
					helperText={passwordError || ''}
				/>
				<Button variant='contained' color='primary' type='submit'>
					Sign In
				</Button>
			</form>
			<Box>
				<Typography>
					Don't you have an account? <Link to='/register'>Sign up</Link>
				</Typography>
			</Box>
		</Box>
	);
};

export default SignIn;
