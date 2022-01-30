import React, { useEffect, useRef, useState } from 'react';
import '../styles/AddWorker.scss'

const AddWorker = (props) => {
    const selectDateRef = useRef();
    
    const handleClose = (e) => {
        if(e.target===selectDateRef.current) {
            props.setShowSelectDate(false)
        }
    }

    useEffect(() => {
      const getClick = window.addEventListener('click', handleClose);
    
      return () => {
        try {    
            getClick();
        } catch (e) {
            console.log(e)
        };
        window.removeEventListener('click', handleClose);
        
      };
    },[]);

  return (
    <div ref={selectDateRef} className='selectDate'>
        <div className='selectDate--box'>
            <div className='selectDate--box--header'>
                <div></div>
                <h2>Registrate</h2>
                <div className='selectDate--box--header--close' onClick={() => {props.setShowSelectDate(false)}}>X</div>
            </div>
            <hr />
            <h1>Seleccioná tu turno</h1>
        </div>
    </div>);
};

export default AddWorker;
