import React from 'react';
import Carousel, { CaroulselItem } from './Carrousel';
import Profile from './Profile';

const Main = () => {
  return (
    <div className='main'>
        <h1>Visitor Barber</h1>
        <p>Aca te conectamos con los mejores peluqueros cerca tuyo y al mejor precio</p>
        <div className="main--content">
            <Carousel
                repeat={false}
                amountItems={1}
            >
                <CaroulselItem><Profile /></CaroulselItem>
                <CaroulselItem><Profile /></CaroulselItem>
                <CaroulselItem><Profile /></CaroulselItem>
                <CaroulselItem><Profile /></CaroulselItem>
                <CaroulselItem><Profile /></CaroulselItem>
                <CaroulselItem><Profile /></CaroulselItem>
                
            </Carousel>
        </div>
    </div>);
};

export default Main;