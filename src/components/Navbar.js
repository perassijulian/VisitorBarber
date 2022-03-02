import React from 'react';
import { useDispatch } from 'react-redux';
import { 
    BrowserRouter as Router,
    Link,  
    Outlet
} from 'react-router-dom';
import { logoutUser } from '../actions/users';
import '../styles/Navbar.scss';

const Navbar = (props) => {
    const dispatch = useDispatch();

    const openLogin = () => {
        props.setShowAddWorker(false);
        props.setShowLogin(!props.showLogin);
    }

    const openAddWorker = () => {
        props.setShowLogin(false);
        props.setShowAddWorker(!props.showAddWorker);
    }

    const logOut = () => {
        dispatch(logoutUser());
        alert('See you soon 😀')
    }

  return (
    <div className='navbar'>
        <Link className='navbar--logo' to='/'>VISITOR BARBER</Link>
        <nav className='navbar--nav'>
             <Link to='/user/login'>LOG IN</Link>
             <Link to='/user/signup'>REGISTRATE</Link>
             <Link to='/'>LOG OUT</Link>
            <Link to='/'>NOSOTROS</Link>
        </nav>
        <Outlet />
    </div>);
};

export default Navbar;