import './styles.scss';
import { useEffect, useState } from 'react';
import Carousel, { CaroulselItem } from '../Carrousel';
import Profile from '../Profile';
import { userRequest } from '../../requestMethods';
import { getWorkers } from '../../redux/workerService';
import { useDispatch, useSelector } from 'react-redux';

const Services = () => {
  const [amountToDisplay, setAmountToDisplay] = useState(3);
  const [filter, setFilter] = useState('');
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const dispatch = useDispatch();

  const { workersInfo, isFetching } = useSelector((state) => state.worker)

  useEffect(() => {
    if (filter==='all') {
      getWorkers(dispatch, `/worker?min=${min||1}&max=${max||999999}`);
    } else {
      getWorkers(dispatch, `/worker?min=${min||1}&max=${max||999999}&type=${filter}`);
    }
  }, [filter, min, max])

  const defineAmountToDisplay = () => {
    if (window.innerWidth < 800) {
        setAmountToDisplay(1);
        return
    } else if (window.innerWidth<1100) {
        setAmountToDisplay(2);
        return
    };
    setAmountToDisplay(3); 
  }

  const handleSelection = (e) => {
    setFilter(e.target.value)
  }

  useEffect(() => {
    const getWindowWidth = window.addEventListener('resize', defineAmountToDisplay)   
    return () => {window.removeEventListener('resize', defineAmountToDisplay);};
  }, []);
  
  useEffect(() => {defineAmountToDisplay();},);
  
  return (
    <div className='main'>
      <h1 className='main--title'>EL NUEVO CONCEPTO EN PELUQUERIA</h1>
      <p className='main--description'>En Visitor barber te permitimos conectar con los 
      mejores barberos y peluqueros. A un solo click podes reservar qué día y 
      a qué hora querés que te visitemos. Contamos con Lorem ipsum dolor sit 
      amet, consectetur adipiscing elit, sed do eiusmod.</p>
      <div className='filters'>
        <select onChange={handleSelection}>
          <option value='all'>--FILTRAR SERVICIOS--</option>
          <option value='barber'>Barbero</option>
          <option value='hairdresser'>Peluquero</option>
        </select>
        <div>
          <input type='number' placeholder='PRECIO MIN' onChange={(e) => {setMin(e.target.value)}}></input>
        </div>
        <div>
          <input type='number' placeholder='PRECIO MAX' onChange={(e) => {setMax(e.target.value)}}></input>
        </div>
      </div>
      {workersInfo && 
        <div className="main--content">
          <Carousel
            repeat={true}
            amountItems={amountToDisplay}
            className="main--content--carousel"
          >
            {workersInfo.map((item) => (
              <CaroulselItem className='profilesCarousel'><Profile item={item} key={item}/></CaroulselItem>
            ))}
          </Carousel>
        </div>
      }
    </div>);
};

export default Services;