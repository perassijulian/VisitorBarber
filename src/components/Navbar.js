import React from 'react';
import '../Navbar.scss';

const Navbar = (props) => {

    const openLanding = () => {
        props.setShowAddWorker(false);
        props.setShowLanding(!props.showLanding);
    }

    const openAddWorker = () => {
        props.setShowLanding(false);
        props.setShowAddWorker(!props.showAddWorker);
    }

  return (
      

    
    <div className='navbar'>
        <h4>VISITOR BARBER</h4>
        <nav className='navbar--nav'>
            <div onClick={openLanding}>LOG IN</div>
            <div onClick={openAddWorker}>TRABAJO</div>
            <div>NOSOTROS</div>
        </nav>
    </div>);
};

export default Navbar;