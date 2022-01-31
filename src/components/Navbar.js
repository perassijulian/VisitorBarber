import React from 'react';
import '../styles/Navbar.scss';

const Navbar = (props) => {

    const openLogin = () => {
        props.setShowAddWorker(false);
        props.setShowLogin(!props.showLogin);
    }

    const openAddWorker = () => {
        props.setShowLogin(false);
        props.setShowAddWorker(!props.showAddWorker);
    }

  return (
      

    
    <div className='navbar'>
        <h4 onClick={() => props.setShowLanding(true)}>VISITOR BARBER</h4>
        <nav className='navbar--nav'>
            <div onClick={openLogin}>LOG IN</div>
            <div onClick={openAddWorker}>REGISTRATE</div>
            <div>NOSOTROS</div>
        </nav>
    </div>);
};

export default Navbar;