import axios from 'axios'

export const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3002/books')
    return response.data;
}

export const fetchBooksById = async (id) => {
    const response = await axios.get(`http://localhost:3002/books?id=${id}`)
    return response.data;
}