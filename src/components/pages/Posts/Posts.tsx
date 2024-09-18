import React from 'react';
import PostsGrid from '../../organisms/PostsGrid';
import { useAuth } from '../../../providers/authProvider';

const Posts = (): React.ReactNode => {
	const { user } = useAuth();
	console.log(user);
	return <PostsGrid />;
};

export default Posts;
