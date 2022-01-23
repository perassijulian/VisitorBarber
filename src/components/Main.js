import React from 'react';
import Carousel, { CaroulselItem } from './Carrousel';
import Profile from './Profile';
import {profilesArray} from '../profilesSource';

const Main = () => {

  const profilesToDisplay = profilesArray.map((item) => {
      return (
        <CaroulselItem><Profile item={item}/></CaroulselItem>
      )
  })

  return (
    <div className='main'>
        <h1>Visitor Barber</h1>
        <p>Aca te conectamos con los mejores peluqueros cerca tuyo y al mejor precio</p>
        <div className="main--content">
            <Carousel
                repeat={true}
                amountItems={3}
            >
                {profilesToDisplay}
            </Carousel>
        </div>
    </div>);
};

export default Main;