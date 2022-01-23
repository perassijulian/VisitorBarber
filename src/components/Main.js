import React from 'react';
import Carousel, { CaroulselItem } from './Carrousel';
import Profile from './Profile';

const Main = () => {
  return (
    <div>
        <Carousel>
            <CaroulselItem>Item1</CaroulselItem>
            <CaroulselItem>Item2</CaroulselItem>
            <CaroulselItem>Item3</CaroulselItem>
            <CaroulselItem>Item4</CaroulselItem>
            <CaroulselItem>Item5</CaroulselItem>
            <CaroulselItem>Item6</CaroulselItem>
        </Carousel>
  
    </div>);
};

export default Main;