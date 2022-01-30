import React, { useState } from 'react';
import lupa from '../pictures/lupa.png'
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
        <section>
            <div className='button--toggle'>
                <button className={barberoClassName} onClick={handleBarberoClick} >BARBERO</button>
                <button className={peluqueroClassName} onClick={handlePeluqueroClick}>PELUQUERO</button>
            </div>
            <div className='input--search'>
                <input 
                    type="text"
                    placeholder='Ingrese ciudad, barrio o dirección'
                ></input>
                <button
                    
                ><img src={lupa} alt="search button"/></button>
            </div>
        </section>
        <section>
            <h1>¿Le estás dando a tu pelo lo que realmente necesita?</h1>
            <h2>El corte diario es una actividad fundamental para la calidad de vida de tu pelo</h2>
            <button>Buscar peluquero</button>
            <div className='container--pros'>
                <div className='container--pros--item'>
                    <div className='container--pros--item--cercle'>
                        <p>🤗</p>
                    </div>
                    <div className='container--pros--item--text'>
                        <h4>Beneficio titulo</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna al fuera tuyo</p>
                    </div>
                </div>
            </div>
        </section>
      </div>);
};

export default Landing;
