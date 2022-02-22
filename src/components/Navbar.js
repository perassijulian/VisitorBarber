import React from 'react';
import { useDispatch } from 'react-redux';
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
        <h4 onClick={() => props.setShowLanding(true)}>VISITOR BARBER</h4>
        <nav className='navbar--nav'>
            {!props.Auth.isAuthenticated && <div onClick={openLogin}>LOG IN</div>}
            {!props.Auth.isAuthenticated && <div onClick={openAddWorker}>REGISTRATE</div>}
            {props.Auth.isAuthenticated && <div onClick={logOut}>LOG OUT</div>}

            <div>NOSOTROS</div>
        </nav>
    </div>);
};

export default Navbar;