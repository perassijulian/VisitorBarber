import './styles.scss';
import PickDate from '../../components/PickDate';
import service from '../../pictures/Foto.jpg';
import service2 from '../../pictures/Foto2.jpg';
import service3 from '../../pictures/Foto3.jpg';
import service4 from '../../pictures/Foto4.JPG';
import service5 from '../../pictures/Foto5.JPG';
import service6 from '../../pictures/Foto.jpg';
import Navbar from '../../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faRectangleXmark } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../../requestMethods';

const Services = () => {
  const [openModal, setOpenModal] = useState(false);
  const [imageId, setImageId] = useState(1);
  const [user, setUser] = useState([]);
  const [worker, setWorker] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const userId = location.pathname.split('/')[2]

  const images = [
    service,
    service2,
    service3,
    service4,
    service5,
    service6,
  ]

  const skipImage = (direction) => {
    let newId;

    if (direction === "left") {
      newId = imageId === 0 ? (images.length-1) : imageId - 1;
    } else {
      newId = imageId === (images.length-1) ? 0 : imageId + 1;
    }
    setImageId(newId)
  }

  const handleClick = (e) => {
    setOpenModal(true);
    setImageId(parseInt(e.target.id))

  }

  const serviceDescription = () => {
    if (worker.barber & worker.hairdresser) {
      return ("Barbería y peluquería")
    }
    if (worker.barber & !worker.hairdresser) {
      return ("Barbería")
    }
    if (!worker.barber & worker.hairdresser) {
      return ("Peluquería")
    }
  }

  useEffect(() => {
    const getWorker = async () => {
      const resUser = await publicRequest.get(`/user/worker/${userId}`)
      const resWorker = await publicRequest.get(`/worker/find/${userId}`)
      console.log('resUser', resUser)
      console.log('resWorker', resWorker)
      setUser(resUser.data)
      setWorker(resWorker.data[0])
      setIsLoading(false);
    }
    getWorker();
  }, [])

  console.log('user', user)
  console.log('worker', worker)
  
  return (
    <div className='services'>
      <Navbar />
      {!isLoading && <div className='services-container'>
        <h1>{user.username}</h1>
        <div className='body'>
          <div className='showcase'>
            {worker.showcasePictures.map((image, i) => (
              <div className='showcaseImgContainer'>
                <img 
                  id={i} 
                  key={i} 
                  className='showcaseImg' 
                  onClick={handleClick} 
                  src={image} 
                  alt="example"
                />
              </div>
            ))}
          </div>
          <div className='info'>
            <div className='item'>
              <span className='itemTitle'>Días disponibles</span>
              <span className='itemDesc'>{worker.dayAvailable}</span>
            </div>
            <div className='item'>
              <span className='itemTitle'>Horarios disponibles</span>
              <span className='itemDesc'>{worker.timeAvailable}</span>
            </div>
            <div className='item'>
              <span className='itemTitle'>Servicios</span>
              <span className='itemDesc'>{
                worker.barber 
                  ? worker.hairdresser
                    ? "Barbería y peluquería" 
                    : "Peluquería"
                  : "Barbería"
              }</span>
            </div>
            {worker.barber && 
              <div className='item'>
                <span className='itemTitle'>Costo promedio barbería</span>
                <span className='itemDesc'>${worker.averageCostBarber}</span>
              </div>
            }
            {worker.hairdresser && 
              <div className='item'>
                <span className='itemTitle'>Costo promedio peluquería</span>
                <span className='itemDesc'>${worker.averageCostHairdress}</span>
              </div>
            }
            <div className='dateSelector'>
              <PickDate className="datePicker" />
              <button className='reserveButton'>Reservar</button>
            </div>
          </div>
        </div>
      </div>}
      {openModal && 
        <div className='modal'>
            <FontAwesomeIcon className='closeIcon' onClick={() => {setOpenModal(false)}} icon={faRectangleXmark} />
            <FontAwesomeIcon className='arrowIcon' onClick={() => skipImage('left')} icon={faArrowLeft} />
            <div className='imgModal'>
              <img className='showcaseImgModal' src={worker.showcasePictures[imageId]} alt="example"/>
            </div>
            <FontAwesomeIcon className='arrowIcon' onClick={() => skipImage('right')} icon={faArrowRight} />
        </div>
      }
    </div>
  )
}

export default Services