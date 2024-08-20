import axios from "axios"

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const validateUser = () => {
    return false
}

export const createUser = async (data) => {
    const response = await axios.post(`${BASE_URL}/user`, data)
    return response.data
}