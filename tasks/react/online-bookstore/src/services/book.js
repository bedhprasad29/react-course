import axios from 'axios'

const API_URL = 'http://localhost:3002';

export const fetchBooks = async () => {
    const response = await axios.get(`${API_URL}/books`)
    return response.data;
}

export const createBook = async (book) => {
    const response = await axios.post(`${API_URL}/books`, book)
    return response.data;
}

export const updateBook = async (id, data) => {
    const response = await axios.put(`${API_URL}/books/${id}`, data)
    return response.data;
}

export const fetchBooksById = async (id) => {
    const response = await axios.get(`${API_URL}/books?id=${id}`)
    return response.data;
}

export const deleteBook = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/books/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting book:", error);
        throw error;
    }
};


export const fetchAllMenus = async () => {
    const response = await axios.get(`${API_URL}/menus`)
    return response.data;
}