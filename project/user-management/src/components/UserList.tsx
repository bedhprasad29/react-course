import { useEffect, useState } from "react"
import { fetchUsers } from '../services/userService'
import '../assets/styles/UserList.css'
import UserDetail from "./UserDetail";

export interface UserInterface {
    avatar: string;
    email: string;
    first_name: string;
    last_name: string;
    id: number;
}

function UserList() {
    const [users, setUsers] = useState<UserInterface[]>([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [filter, setFilter] = useState('')
    const [selectedUser, setSelectedUser] = useState<Number | null>(0)

    useEffect(() => {
        setLoading(true)
        fetchUsers(page)
            .then((data: UserInterface[]) => {
                setUsers(data)
                setLoading(false)
            })
            .catch((err) => {
                console.error('Error fetching Users: ', err)
                setLoading(false)
            })
    }, [page]);
    console.log('u', users);



    if (loading) return <p>Loading ...</p>

    const filteredUsers: UserInterface[] = users.filter(user => `${user?.first_name} ${user?.last_name}`.toLowerCase().includes(filter.toLowerCase()))

    console.log('fu', filteredUsers);

    return (
        <>
            <span className="user-filter">
                <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} placeholder="Filter by Name..." />
            </span>
            {
                users.length == 0 && <div style={{ margin: "1rem" }}> No Users Found. </div>
            }
            <div className="user-list">
                {
                    filteredUsers && filteredUsers.map(user => (
                        <div key={user.id} className="user-item" onClick={() => setSelectedUser(user.id)}>
                            <img src={user.avatar} alt={user.first_name} />
                            <p>{user.first_name} {user.last_name}</p>
                        </div>
                    ))
                }

                {selectedUser && <UserDetail userId={selectedUser} onClose={() => setSelectedUser(null)} />}
            </div>
            <div className="pagination">
                <button disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
                <span className="page-number">{page}</span>
                <button disabled={users.length == 0} onClick={() => setPage(page + 1)}> Next </button>
            </div>
        </>
    )
}

export default UserList
