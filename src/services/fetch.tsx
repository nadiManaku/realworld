export interface IData {
    postId: number;
    id: number;
    body: string;
    name: string;
    email: string;
}

const fetchComments = async () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/comments';
    const response = await fetch(apiUrl);
    return await response.json();
}

export default fetchComments;