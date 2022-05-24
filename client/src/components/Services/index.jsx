import { useEffect, useState } from 'react';
import Carousel, { CaroulselItem } from '../Carrousel';
import Profile from '../Profile';
import { userRequest } from '../../requestMethods';
import { getWorkers } from '../../redux/workerService';
import { useDispatch, useSelector } from 'react-redux';

const Services = () => {
  const [amountToDisplay, setAmountToDisplay] = useState(3);

  const dispatch = useDispatch();

  const { workersInfo, isFetching } = useSelector((state) => state.worker)

  useEffect(() => {
    getWorkers(dispatch);
  }, [])

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
      amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
      exercitation ullamco laboris nisi ut aliquip.</p>
      {workersInfo && 
        <div className="main--content">
          <Carousel
            repeat={true}
            amountItems={amountToDisplay}
            className="main--content--carousel"
          >
            {workersInfo.map((item) => (
              <CaroulselItem><Profile item={item} key={item}/></CaroulselItem>
            ))}
          </Carousel>
        </div>
      }
    </div>);
};

export default Services;