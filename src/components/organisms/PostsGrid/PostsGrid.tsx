import React from 'react';
import UserPost from '../../molecules/UserPost';
import { Box } from '@mui/material';

const PostsGrid = (): React.ReactNode => {
	return (
		<Box>
			<UserPost />
		</Box>
	);
};

export default PostsGrid;
