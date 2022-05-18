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
import { useState } from 'react';

const Services = () => {
  const [openModal, setOpenModal] = useState(false);
  const [imageId, setImageId] = useState(1);

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
    console.log(newId)
    setImageId(newId)
  }

  const handleClick = (e) => {
    setOpenModal(true);
    setImageId(parseInt(e.target.id))

  }

  return (
    <div className='services'>
      <Navbar />
      <div className='services-container'>
        <h1>Julian Perassi</h1>
        <div className='body'>
          <div className='showcase'>
            {images.map((image, i) => (
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
              <span className='itemDesc'>Lunes a viernes</span>
            </div>
            <div className='item'>
              <span className='itemTitle'>Horarios disponibles</span>
              <span className='itemDesc'>8 a 18hs</span>
            </div>
            <div className='item'>
              <span className='itemTitle'>Servicios</span>
              <span className='itemDesc'>Peluquería y barbería</span>
            </div>
            <div className='item'>
              <span className='itemTitle'>Costo promedio</span>
              <span className='itemDesc'>$300 peluquería / $500 barbería</span>
            </div>
            <div className='dateSelector'>
              <PickDate className="datePicker" />
              <button className='reserveButton'>Reservar</button>
            </div>
          </div>
        </div>
      </div>
      {openModal && 
        <div className='modal'>
            <FontAwesomeIcon className='closeIcon' onClick={() => {setOpenModal(false)}} icon={faRectangleXmark} />
            <FontAwesomeIcon className='arrowIcon' onClick={() => skipImage('left')} icon={faArrowLeft} />
            <div className='imgModal'>
              <img className='showcaseImgModal' src={images[imageId]} alt="example"/>
            </div>
            <FontAwesomeIcon className='arrowIcon' onClick={() => skipImage('right')} icon={faArrowRight} />
        </div>
      }
    </div>
  )
}

export default Services