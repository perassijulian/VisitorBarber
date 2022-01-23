import React from 'react';
import photo from '../pictures/Foto.jpg';

const Profile = () => {
  return (
    <div className='profile'>
        <img 
            alt="cut example" 
            src={photo}
            className='profile--img'
        ></img>
        <h1>Joaquin Forquera Yunes</h1>
        <div className='profile--description'>
            <p>Días disponibles: LUN a VIE</p>
            <p>Horarios disponibles: 8 a 18 hs</p>
            <p>Cortes realizados: 25</p>
            <p>Costo estimado: $500</p>

        </div>
        <button>RESERVAR</button>
    </div>);
};

export default Profile;
