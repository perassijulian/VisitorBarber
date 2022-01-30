import React, { useState } from 'react';
import '../styles/Landing.scss';

const Landing = () => {
    const [barberoClicked, setBarberoClicked] = useState(false);
    const [peluqueroClicked, setPeluqueroClicked] = useState(false);
    const [barberoClassName, setBarberoClassName] = useState("button--toggle--barbero");
    const [peluqueroClassName, setPeluqueroClassName] = useState("button--toggle--peluquero");

    const handleBarberoClick = () => {
        setBarberoClicked(!barberoClicked);
        setBarberoClassName(barberoClicked? "button--toggle--barbero":"button--toggle--barbero--active");
    }

    const handlePeluqueroClick = () => {
        setPeluqueroClicked(!peluqueroClicked);
        setPeluqueroClassName(peluqueroClicked? "button--toggle--peluquero" : "button--toggle--peluquero--active");
    }

  return (
      <div className='landing'>
        <div className='button--toggle'>
            <button className={barberoClassName} onClick={handleBarberoClick} >Barbero</button>
            <button className={peluqueroClassName} onClick={handlePeluqueroClick}>Peluquero</button>
        </div>
      </div>);
};

export default Landing;
