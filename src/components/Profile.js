import React from 'react';
import photo from '../pictures/Foto.jpg';
import photo2 from '../pictures/Foto2.jpg';
import Carousel, { CaroulselItem } from './Carrousel';
import AlertDialog from './AlertDialog';



const Profile = (props) => {

    const photosArray = [photo, photo2]

    const photoDisplay = photosArray.map((item) => {
        return(
            <img 
                alt="cut example" 
                src={item}
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

        <h1>{props.item.name}</h1>
        <div className='profile--description'>
            <p>Días disponibles: {props.item.days}</p>
            <p>Horarios disponibles: {props.item.time}</p>
            <p>Cortes realizados: {props.item.cuts}</p>
            <p>Costo estimado: {props.item.cost}</p>

        </div>
        <AlertDialog />
        
    </div>);
};

export default Profile;
