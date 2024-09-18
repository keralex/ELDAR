import React, { useEffect, useState } from 'react';
import UserPost from '../../molecules/UserPost';
import { Box } from '@mui/material';
import { Post } from '../../../services/posts.interface';
import { getPosts } from '../../../services/posts';
import { useAuth } from '../../../providers/authProvider';

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
	}, []);

	if (error) {
		return <div>{error}</div>;
	}


	return (
		<div>
			<h1>Posts List</h1>
			<ul>
				{posts.map((post) => (
					<UserPost title={post.title} body={post.body} onEdit={() => { }} key={post.id} />
				))}
			</ul>
		</div>
	);
};

export default PostsGrid;
