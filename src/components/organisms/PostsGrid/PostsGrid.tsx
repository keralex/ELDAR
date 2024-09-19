import React, { useEffect, useState } from 'react';
import UserPost from '../../molecules/UserPost';
import { Post } from '../../../services/posts.interface';
import { getPosts } from '../../../services/posts';
import { useAuth } from '../../../providers/authProvider';
import { Box, Grid2 as Grid, Typography } from '@mui/material';
import UserSavePost from '../../molecules/UserSavePost';

const PostsGrid = (): React.ReactNode => {
	const { user } = useAuth();
	const [posts, setPosts] = useState<Post[]>([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchPosts = async () => {
			try {
				const postData = await getPosts(user?.id);
				setPosts(postData);
			} catch (err) {
				setError('Error fetching posts' + err);
			}
		};

		fetchPosts();
	}, [user?.id]);

	if (error) {
		return <div>{error}</div>;
	}


	return (
		<Box>
			<Typography variant="h4" component="h1">Posts List</Typography>
			{user && (
				<Grid container spacing={2}>
					{user.role === 'admin' &&
						<Grid size={4}>
							<UserSavePost
								userId={user.id}
							/>
						</Grid>
					}
					{posts.map((post) => (
						<Grid size={4} key={post.id}>
							<UserPost
								title={post.title}
								body={post.body}
								showEditOption={user?.role == 'admin' ? true : false}
								postId={post.id}
								userId={user.id}
							/>
						</Grid>
					))}
				</Grid>
			)}
		</Box>
	);
};

export default PostsGrid;
