import React from 'react';
import '../Navbar.scss';

const Navbar = (props) => {

  return (

    
    <div className='navbar'>
        <h4>VISITOR BARBER</h4>
        <nav className='navbar--nav'>
            <div onClick={() => {props.setShowLanding(!props.showLanding)}}>LOG IN</div>
            <div>TRABAJO</div>
            <div>NOSOTROS</div>
        </nav>
    </div>);
};

export default Navbar;
