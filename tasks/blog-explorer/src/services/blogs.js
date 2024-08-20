import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const fetchAllPosts = async () => {
    const response = await axios.get(`${BASE_URL}/posts`)
    return response.data;
}

export const createPost = async (data) => {
    const response = await axios.post(`${BASE_URL}/post`, data)
    return response.data;
}