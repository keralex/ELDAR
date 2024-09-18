import { Post, PostData } from "./posts.interface";

export const getPosts = async (userId: number | undefined): Promise<Post[]> => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data: Post[] = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
};


export const updatePost = async (post: Post): Promise<Post> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const updatedPost: Post = await response.json();
    return updatedPost;
}

export const createPost = async (postData: PostData): Promise<void> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    });

    if (!response.ok) {
        throw new Error('Failed to create post');
    }

    const data = await response.json();
    console.log('Post created successfully:', data);
};