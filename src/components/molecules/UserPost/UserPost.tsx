import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton, CardHeader, TextField, CardActions } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { updatePost } from '../../../services/posts';

interface UserPostProps {
	title: string;
	body: string;
	showEditOption: boolean;
	postId: number;
	userId: number;
}

const UserPost = ({ title, body, showEditOption, postId, userId }: UserPostProps): React.ReactNode => {

	const [isEditing, setIsEditing] = useState<boolean>(false)
	const [editedTitle, setEditedTitle] = useState<string>(title);
	const [editedBody, setEditedBody] = useState<string>(body);
	const [currentTitle, setCurrentTitle] = useState<string>(title);
	const [currentBody, setCurrentBody] = useState<string>(body);
	const [error, setError] = useState<string | null>(null);

	const handleSaveClick = async () => {
		try {
			await updatePost({ id: postId, title: editedTitle, body: editedBody, userId });
			setCurrentTitle(editedTitle);
			setCurrentBody(editedBody);
			setIsEditing(false);
		} catch (err) {
			setError('Error updating post');
			console.error(err);
		}
	};

	return (
		<Card sx={{ width: '100%', height: '100%', margin: '16px auto' }}>
			<CardHeader
				action={
					showEditOption &&
					<IconButton onClick={() => setIsEditing(!isEditing)} aria-label="edit">
						<EditIcon />
					</IconButton>
				}
				title={
					isEditing ? (
						<TextField
							value={editedTitle}
							onChange={(e) => setEditedTitle(e.target.value)}
							label="Edit Title"
							fullWidth
							variant="outlined"
						/>
					) : (
						<Typography variant="h5">{currentTitle}</Typography>
					)
				}
			/>
			<CardContent>
				{isEditing ? (
					<TextField
						value={editedBody}
						onChange={(e) => setEditedBody(e.target.value)}
						label="Edit Description"
						fullWidth
						multiline
						rows={4}
						variant="outlined"
					/>
				) : (
					<Typography variant="body2" color="text.secondary">
						{currentBody}
					</Typography>
				)}
			</CardContent>
			<CardActions>
				{isEditing && (
					<IconButton onClick={handleSaveClick} aria-label={'save'}>
						<SaveIcon />
					</IconButton>
				)}
			</CardActions>
			{error && <Typography color="error">{error}</Typography>}
		</Card>
	);
};

export default UserPost;
