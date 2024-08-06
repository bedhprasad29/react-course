import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import BookList from '../books/BookList'
import BookDetails from '../books/BookDetails'
import Login from '../auth/Login'
import Error404 from '../errors/Error404'
import Home from '../Home'
import UserList from '../users/UserList'
import { useEffect, useState } from 'react'
import { fetchAllMenus } from '../../services/book'
import UpdateBook from '../books/UpdateBook'
import Register from '../auth/Register'

export default function Header() {

    return (
        <>
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand"><Link to="/">BookStore</Link></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link">
                                    <Link to="/">Home</Link>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">
                                    <Link to="/users">Users</Link>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">
                                    <Link to="/books">Books</Link>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">
                                    <Link to="/login">Login</Link>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/users' element={<UserList />} />
                    <Route path='/books' element={<BookList />} />
                    <Route path="/books/:id" element={<BookDetails />} />
                    <Route path="/books/update/:id" element={<UpdateBook />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='*' element={<Error404 />} />
                </Routes>
            </Router>
        </>
    )
}