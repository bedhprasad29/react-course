import axios from 'axios';

export const fetchBooks = async () => {
    const response = await axios.get('/api/books');
    return response.data;
};