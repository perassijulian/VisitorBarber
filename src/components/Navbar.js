import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
    Link,  
    Outlet,
    useNavigate,
} from 'react-router-dom';
import { logout, reset } from '../features/auth/authSlice';
import '../styles/Navbar.scss';

const Navbar = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);

    const handleLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate('/');
    }

  return (
    <div className='navbar'>
        <Link className='navbar--logo' to='/'>VISITOR BARBER</Link>
        <nav className='navbar--nav'>
            {!user && <Link to='/user/login'>LOG IN</Link>}
            {!user && <Link to='/user/signup'>REGISTRATE</Link>}
            {user && <button onClick={handleLogout} to='/'>LOG OUT</button>}
            <Link to='/'>NOSOTROS</Link>
        </nav>
        <Outlet />
    </div>);
};

export default Navbar;