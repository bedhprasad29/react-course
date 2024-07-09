import React, { useState, useEffect } from 'react';
import { fetchUsers } from '../services/userService';
import '../styles/UserList.css';
import UserDetail from './UserDetail';


function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetchUsers(page).then(data => {
            setUsers(data);
            setLoading(false);
        }).catch(error => {
            console.error("Error fetching users:", error);
            setLoading(false);
        });
    }, [page]);

    if (loading) return <p>Loading...</p>;

    const filteredUsers = users.filter(user => `${user.first_name} ${user.last_name}`.toLowerCase().includes(filter.toLowerCase()));

    return (
        <>
            <input
                type="text"
                value={filter}
                onChange={e => setFilter(e.target.value)}
                placeholder="Filter by name..."
            />
            <div className="user-list">
                {filteredUsers.map(user => (
                    <div key={user.id} className="user-item">
                        <img src={user.avatar} alt={user.first_name} />
                        <p>{user.first_name} {user.last_name}</p>
                    </div>
                ))}
                {selectedUser && <UserDetail userId={selectedUser} onClose={() => setSelectedUser(null)} />}
            </div>
            <div className="pagination">
                <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
                <span>{page}</span>
                <button onClick={() => setPage(page + 1)}>Next</button>
            </div>
        </>
    );
}

export default UserList;