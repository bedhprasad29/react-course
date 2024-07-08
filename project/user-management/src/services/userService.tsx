
const BASE_URL = 'https://reqres.in/api';

export async function fetchUsers(page = 1) {
    const response = await fetch(`${BASE_URL}/users?page=${page}`)

    if (!response.ok) throw new Error('Not able to fetch users at current moment.')
    const data = await response.json();

    return data.data;
}

export async function fetchUserDetails(userid: number | null) {
    const response = await fetch(`${BASE_URL}/users/${userid}`)
    if (!response.ok) throw new Error('Not able to get user with id: ' + userid)

    const data = await response.json();

    return data.data;
}