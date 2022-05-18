import photo from '../../pictures/Foto.jpg';
import photo3 from '../../pictures/Foto3.jpg';
import { Link } from 'react-router-dom';
import Carousel from '../Carrousel';

const Profile = (props) => {
    const photosArray = [photo, photo3];

    const photoDisplay = photosArray.map((item) => {
        return(
            <img 
                alt="cut example" 
                src={item}
                className='profile--img'
                key={item}
            ></img>
        )
    })    
    
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
        <Link to='/services'>
            <button>Ver perfil</button>
        </Link>
    </div>);
};

export default Profile;
