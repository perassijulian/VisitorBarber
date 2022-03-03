import React from 'react';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { RiGroupLine } from "react-icons/ri";
import { useSelector, useDispatch } from 'react-redux';
import { 
    Link,  
    Outlet,
    useNavigate,
} from 'react-router-dom';
import { logout, reset } from '../../features/auth/authSlice';
import './styles.scss';


const Navbar = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);

    const handleLogout = () => {
        dispatch(logout());
        dispatch(reset());
        alert('Esperamos verte de nuevo pronto! 😀')
        navigate('/');
    }

  return (
    <div className='navbar'>
        <Link className='navbar--logo' to='/'>VISITOR BARBER</Link>
        <nav className='navbar--nav'>
            {!user && <Link to='/user/login'><FaSignInAlt /> LOG IN</Link>}
            {!user && <Link to='/user/signup'><FaUser /> REGISTRATE</Link>}
            {user && <button onClick={handleLogout} to='/'><FaSignOutAlt /> LOG OUT</button>}
            <Link to='/'><RiGroupLine /> NOSOTROS</Link>
        </nav>
        <Outlet />
    </div>);
};

export default Navbar;