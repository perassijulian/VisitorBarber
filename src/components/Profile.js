import React from 'react';
import photo from '../pictures/Foto.jpg';
import photo2 from '../pictures/Foto2.jpg';
import Carousel, { CaroulselItem } from './Carrousel';


const Profile = () => {

    const photosArray = ['photo', 'photo2']

    const photoDisplay = photosArray.map((item) => {
        return(
            <img 
                alt="cut example" 
                src={photo}
                className='profile--img'
            ></img>

        )
    })


  return (
    <div className='profile'>
        <Carousel
            repeat={false}
            amountItems={1}
        >
            {photoDisplay}
        </Carousel>

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
