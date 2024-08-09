import axios from 'axios'

const BASE_URL = 'http://localhost:3002';

export const fetchAllUsers = async () => {
    const response = await axios.get(`${BASE_URL}/users`)
    console.log(response)
    return response.data;
}

export const validateUser = async (data, navigate) => {
    const { email, password } = data;

    try {
        const response = await axios.get(`${BASE_URL}/users?email=${email}`);
        if (response.status === 200) {
            const userData = response.data[0];

            if (userData.password === password) {
                console.log('Valid user');
                const token = userData?.token;

                localStorage.setItem('token', token);
                setAuthToken(token);
                console.log('navigate')

                navigate('/');  // Redirect to home page after successful login
            } else {
                // return response;
                console.log('Invalid user');
                // Handle invalid user case (e.g., show error message)
            }
        }
    } catch (error) {
        console.error('Error validating user:', error);
        // Handle error case (e.g., show error message)
    }
};


export const createUser = async (data) => {
    const response = await axios.post(`${BASE_URL}/users`, data)
    return response.data;
}

export const fetchUsersById = async (id) => {
    const response = await axios.get(`${BASE_URL}/users?id=${id}`)
    return response.data;
}

export const deleteUser = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/users/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting book:", error);
        throw error;
    }
};

export const setAuthToken = ((token) => {
    if (token) {
        axios.defaults.headers['common'] = `Bearer ${token}`
    } else {
        console.log(axios.defaults.headers)
        // delete axios.defaults.headers['common']
    }
})