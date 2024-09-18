import { Post } from "./posts.interface";

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