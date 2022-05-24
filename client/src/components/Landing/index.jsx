import React, { useState } from 'react';
import lupa from '../../pictures/lupa.png';
import background from '../../pictures/barber-background.jpg';
import './styles.scss';

const Landing = ({setShowLanding}) => {
    const [barberoClicked, setBarberoClicked] = useState(false);
    const [peluqueroClicked, setPeluqueroClicked] = useState(false);

    const handleSearch = () => {
        setShowLanding(false);
    }

  return (
      <div className='landing'>
        <div className='landing--1'>
            <h1>dale más calidad de vida a tu pelo, aún cuando no estás a su lado</h1>
            <div className='button--toggle'>
                <button 
                    className={`button--toggle--barbero${barberoClicked? '--active' : ''}`} 
                    onClick={() => setBarberoClicked(!barberoClicked)} 
                >BARBERO</button>
                <button 
                    className={`button--toggle--peluquero${peluqueroClicked? '--active' : ''}`} 
                    onClick={() => setPeluqueroClicked(!peluqueroClicked)}
                >PELUQUERO</button>
            </div>
            <div className='input--search'>
                <input 
                    type="text"
                    placeholder='Ingrese ciudad, barrio o dirección'
                ></input>
                <button
                    onClick={handleSearch}
                ><img src={lupa} alt="search button"/></button>
            </div>
        </div>
        <div className='landing--2'>
            <h1>¿Le estás dando a tu pelo lo que realmente necesita?</h1>
            <h2>El corte diario es una actividad fundamental para la calidad de vida de tu pelo</h2>
            <div className='landing--2--button'>
                <button className='section--button'>Buscar peluquero</button>
            </div>
            <div className='container--pros'>
                <div className='container--pros--item'>
                    <div className='container--pros--item--cercle'>
                        <p>🤗</p>
                    </div>
                    <div className='container--pros--item--text'>
                        <h4>Beneficio titulo</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna al fuera tuyo</p>
                    </div>
                </div>
                <div className='container--pros--item'>
                    <div className='container--pros--item--cercle'>
                        <p>🤗</p>
                    </div>
                    <div className='container--pros--item--text'>
                        <h4>Beneficio titulo</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna al fuera tuyo</p>
                    </div>
                </div>
                <div className='container--pros--item'>
                    <div className='container--pros--item--cercle'>
                        <p>🤗</p>
                    </div>
                    <div className='container--pros--item--text'>
                        <h4>Beneficio titulo</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna al fuera tuyo</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='background--image'>
        </div>
        <div className='landing--2'>
            <h1>¿Le estás dando a tu pelo lo que realmente necesita?</h1>
            <h2>El corte diario es una actividad fundamental para la calidad de vida de tu pelo</h2>
            <div className='landing--2--button'>
                <button className='section--button'>Buscar barbero</button>
            </div>
            <div className='container--pros'>
                <div className='container--pros--item'>
                    <div className='container--pros--item--cercle'>
                        <p>🤗</p>
                    </div>
                    <div className='container--pros--item--text'>
                        <h4>Beneficio titulo</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna al fuera tuyo</p>
                    </div>
                </div>
                <div className='container--pros--item'>
                    <div className='container--pros--item--cercle'>
                        <p>🤗</p>
                    </div>
                    <div className='container--pros--item--text'>
                        <h4>Beneficio titulo</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna al fuera tuyo</p>
                    </div>
                </div>
                <div className='container--pros--item'>
                    <div className='container--pros--item--cercle'>
                        <p>🤗</p>
                    </div>
                    <div className='container--pros--item--text'>
                        <h4>Beneficio titulo</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna al fuera tuyo</p>
                    </div>
                </div>
            </div>
        </div>
        
      </div>);
};

export default Landing;
