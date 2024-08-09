import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from '../books/BookList';
import BookDetails from '../books/BookDetails';
import Login from '../auth/Login';
import Error404 from '../errors/Error404';
import Home from '../Home';
import UserList from '../users/UserList';
import UpdateBook from '../books/UpdateBook';
import Register from '../auth/Register';
import RouteGuard from '../RouteGuard';
import { Navbar } from './Navbar';
import { Profile } from '../auth/Profile';

export default function Header() {

    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<RouteGuard component={Home} />} />
                    <Route path='/users' element={<UserList />} />
                    <Route path='/books' element={<BookList />} />
                    <Route path="/books/:id" element={<BookDetails />} />
                    <Route path="/books/update/:id" element={<UpdateBook />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='*' element={<Error404 />} />
                </Routes>
            </Router>
        </>
    )
}
