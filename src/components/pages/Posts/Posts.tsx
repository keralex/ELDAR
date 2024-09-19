import React from 'react';
import PostsGrid from '../../organisms/PostsGrid';
import { useAuth } from '../../../providers/authProvider';
import { Box, Button } from '@mui/material';
import { getBoxStyles, getContainerStyles } from './Posts.styles';

const Posts = (): React.ReactNode => {
	const { logout } = useAuth();

	return <Box sx={getContainerStyles()}>
		<Box sx={getBoxStyles()}>
			<Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
				<Button variant='outlined' onClick={logout}>Logout</Button>
			</Box>
			<PostsGrid />;
		</Box>

	</Box>
};

export default Posts;
