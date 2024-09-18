import { Post } from "./posts.interface";

export const fetchPosts = async (): Promise<Post[]> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=1');
  
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  
    const data: Post[] = await response.json();
    return data;
  };