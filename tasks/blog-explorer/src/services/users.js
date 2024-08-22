import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const fetchAllUsers = async () => {
    const response = await axios.get(`${BASE_URL}/users`)
    return response?.data;
}

export const createUser = async (data) => {
    const response = await axios.post(`${BASE_URL}/user`, data)
    return response.data;
}

export const validateUser = () => {
    return false
}