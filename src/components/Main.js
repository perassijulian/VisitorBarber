import React, { useEffect, useState } from 'react';
import Carousel, { CaroulselItem } from './Carrousel';
import Profile from './Profile';
import {profilesArray} from '../profilesSource';
import CountrySelect from './CountrySelect';

const Main = (props) => {
  const [amountToDisplay, setAmountToDisplay] = useState(3)
  const profilesToDisplay = profilesArray.map((item) => {
      return (
        <CaroulselItem><Profile item={item}/></CaroulselItem>
      )
  })
/**
  const handleResize = () => {
      console.log(window.innerWidth)
      if (window.innerWidth < 1100) {
        setAmountToDisplay(2);
      } else if (window.innerWidth<800) {
        setAmountToDisplay(1);

      }
  }

  useEffect(() => {
    const getWindowWidth = window.addEventListener('resize', handleResize) 
  
    return () => {
      getWindowWidth();
    };
  }, []);

  useEffect(() => {
    console.log(window.innerWidth)
    if (window.innerWidth < 1100) {
        setAmountToDisplay(2);
    } else if (window.innerWidth<800) {
        setAmountToDisplay(1);
    }; 
  }, []);
  
   */
  
  useEffect(() => {
    console.log(window.innerWidth);
    console.log('amount to disp: ', amountToDisplay)
    if (window.innerWidth < 800) {
        setAmountToDisplay(1);
        console.log('amount to disp: ', amountToDisplay)
    } else if (window.innerWidth<1100) {
        setAmountToDisplay(2);
        console.log('amount to disp: ', amountToDisplay)
    }; 
  
  }, []);
  

  return (
    <div className='main'>
        
        <h1 className='main--title'>EL NUEVO CONCEPTO EN PELUQUERIA</h1>
        <p className='main--description'>En Visitor barber te permitimos conectar con los 
        mejores barberos y peluqueros. A un solo click podes reservar qué día y 
        a qué hora querés que te visitemos. Contamos con Lorem ipsum dolor sit 
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip.</p>
        <div className="main--content">
            <Carousel
                repeat={true}
                amountItems={amountToDisplay}
            >
                {profilesToDisplay}
            </Carousel>
        </div>
    </div>);
};

export default Main;