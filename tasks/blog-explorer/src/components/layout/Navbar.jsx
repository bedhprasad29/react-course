import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/features/UserSlice";

export const Navbar = () => {
    const user = useSelector(state => state.users.loggedInUser)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleLogout = () => {
        dispatch(logout())
        navigate('/login')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light ms-3">
            <Link to="/" className="navbar-brand">Blog Explorer</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            {user ? (
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link to="/users" className="nav-link">Users</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link to="/blogs" className="nav-link">Blogs</Link>
                        </li>
                    </ul>

                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item dropdown">
                            <a href="/" className="nav-link dropdown-toggle d-flex align-items-center" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png" alt="Avatar" className="rounded-circle me-2" width="40" height="40" />
                                Admin
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link to="/profile" className="dropdown-item">Profile</Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            ) : (
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav >
    )
}