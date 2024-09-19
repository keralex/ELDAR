import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = (): React.ReactNode => {
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [emailError, setEmailError] = useState<string | null>(null);
	const [passwordError, setPasswordError] = useState<string | null>(null);
	const [nameError, setNameError] = useState<string | null>(null);

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleSubmit = (e: any) => {
		e.preventDefault();
		let isValid = true;

		// validad nombre
		if (name.length == 0) {
			setNameError('Name is required');
			isValid = false;
		} else {
			setNameError(null);
		}

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

		if (isValid) {
			alert('successful registration');
			navigate('/');
		}
	};

	return (
		<Box>
			<Typography mb='2rem'>Join us today! Create an account to start sharing and discovering amazing posts.</Typography>
			<form onSubmit={handleSubmit} noValidate>
				<Typography>Name</Typography>
				<TextField
					id='name'
					variant='outlined'
					placeholder='Name example'
					value={name}
					onChange={(e) => setName(e.target.value)}
					error={!!nameError}
					helperText={nameError || ''}
					sx={{ mb: '1rem' }}
					fullWidth
				/>
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
					sx={{ mb: '1rem' }}
					fullWidth
				/>
				<Typography>Password</Typography>
				<TextField
					id='password'
					variant='outlined'
					placeholder='at least 8 characters'
					margin='normal'
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					error={!!passwordError}
					helperText={passwordError || ''}
					fullWidth
				/>
				<Button sx={{ my: '2rem' }} variant='contained' color='primary' type='submit'>
					Sign Up
				</Button>
			</form>
			<Box>
				<Typography>
					Already have an account? <Link to='/'>Sign In</Link>
				</Typography>
			</Box>
		</Box>
	);
};

export default SignUp;
