import React from 'react';
import { Card, CardContent, CardActions, Typography, IconButton, CardHeader } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';


interface UserPostProps {
	title: string;
	body: string;
	onEdit: () => void;
}


const UserPost = ({ title, body, onEdit }: UserPostProps): React.ReactNode => {
	return (
		<Card sx={{ maxWidth: 345, margin: '16px auto' }}>
			<CardHeader
				action={
					<IconButton onClick={onEdit} aria-label="edit">
						<EditIcon />
					</IconButton>
				}
				title={title}
			/>

			<CardContent>
				<Typography variant="body2" color="text.secondary">
					{body}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default UserPost;
