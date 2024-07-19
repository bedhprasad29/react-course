import { useEffect, useState } from 'react'
import '../assets/styles/UserDetails.css'
import { fetchUserDetails } from '../services/userService'
import { UserInterface } from './UserList'

function UserDetail({ userId, onClose }) {
    const [user, setUser] = useState<UserInterface | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true);
        fetchUserDetails(userId)
            .then((data) => {
                setUser(data)
                setLoading(false)

            })
            .catch((error) => {
                console.error('Not able to find User. Got error : ' + error)
                setLoading(false)
            })

    }, [userId])

    if (loading) return <div> Loading... </div>
    return (
        <div className='user-detail'>
            <button onClick={onClose}>Close</button>
            <img src={user?.avatar} alt={user?.first_name} />
            <h2>{user?.first_name} {user?.last_name}</h2>
            <p>Email: {user?.email}</p>
        </div>
    )
}

export default UserDetail
