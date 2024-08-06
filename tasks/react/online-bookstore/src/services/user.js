import axios from 'axios'

const API_URL = 'http://localhost:3002';

export const fetchAllUsers = async () => {
    const response = await axios.get(`${API_URL}/users`)
    return response.data;
}

export const validateUser = async (data) => {
    const { email, password } = data;

    const response = await axios.get(`${API_URL}/users?email=${email}`)
    console.log(response)
}