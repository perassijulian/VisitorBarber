import photo from '../../pictures/Foto.jpg';
import photo3 from '../../pictures/Foto3.jpg';
import { Link } from 'react-router-dom';
import Carousel from '../Carrousel';
import { useEffect, useState } from 'react';
import { userRequest } from '../../requestMethods';

const Profile = (props) => {
    const [user, setUser] = useState({})

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await userRequest.get(`/user/worker/${props.item.user}`)
                setUser(res.data);
            } catch (error) {
                console.log(error)
            }
        }
        getUser();
    }, [])
    
    return (
        <div className='profile'>
            <img src={user.img} alt='worker' />
            <h1>{user.username}</h1>
            <div className='profile--description'>
                <p>Días disponibles: {props.item.dayAvailable}</p>
                <p>Horarios disponibles: {props.item.timeAvailable}</p>
                <p>Cortes realizados: agregar a DB</p>
                {props.item.barber && <p>Costo estimado barbería: {props.item.averageCostBarber}</p>}
                {props.item.hairdresser && <p>Costo estimado peluquería: {props.item.averageCostHairdress}</p>}

            </div>
            <Link to='/services'>
                <button>Ver perfil</button>
            </Link>
        </div>
    );
};

export default Profile;
