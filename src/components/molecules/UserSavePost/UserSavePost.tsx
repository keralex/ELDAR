import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton, CardHeader, TextField, CardActions } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { createPost } from '../../../services/posts';

interface UserSavePostProps {
    userId: number;
}

const UserSavePost = ({ userId }: UserSavePostProps): React.ReactNode => {

    const [editedTitle, setEditedTitle] = useState<string>('');
    const [editedBody, setEditedBody] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const handleSaveClick = async () => {
        try {
            await createPost({ title: editedTitle, body: editedBody, userId });
            setEditedTitle('');
            setEditedBody('');
        } catch (err) {
            setError('Error updating post');
            console.error(err);
        }
    };

    return (
        <Card sx={{ width: '100%', height: '100%', margin: '16px auto' }}>
            <CardHeader

                title={
                    <TextField
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                        label="Title"
                        fullWidth
                        variant="outlined"
                    />
                }
            />
            <CardContent>
                <TextField
                    value={editedBody}
                    onChange={(e) => setEditedBody(e.target.value)}
                    label="Description"
                    fullWidth
                    multiline
                    rows={4}
                    variant="outlined"
                />
            </CardContent>
            <CardActions>
                <IconButton onClick={handleSaveClick} aria-label={'save'}>
                    <SaveIcon />
                </IconButton>
            </CardActions>
            {error && <Typography color="error">{error}</Typography>}
        </Card>
    );
};

export default UserSavePost;
