import React from 'react';
import photo from '../pictures/Foto.jpg';
import photo2 from '../pictures/Foto2.jpg';
import Carousel from './Carrousel';
import AlertDialog from './AlertDialog';



const Profile = (props) => {
    const photosArray = [photo, photo2];

    const photoDisplay = photosArray.map((item) => {
        return(
            <img 
                alt="cut example" 
                src={item}
                className='profile--img'
            ></img>
        )
    })

    /**
    const handleSwipe = (e) => {
        setTarget (e.target.alt == "cut example");
        console.log('TARGET ISSS', target);
    }

    useEffect(() => {
      //const getTouch = window.addEventListener('touchstart',handleSwipe);
      const getSwipe = window.addEventListener('touchmove',handleSwipe);
      
      return () => {
        //window.deleteEventListener('touchstart',handleSwipe);
        window.deleteEventListener('touchmove',handleSwipe);
        //getTouch();
        getSwipe();

      };
    }, []);
     */
    
    
  return (
    <div className='profile'>
        <Carousel
            repeat={false}
            amountItems={1}
            className='profile--img--carousel'
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
