import React, { useEffect, useState } from 'react';
import FileBase from 'react-file-base64';
import './styles.scss';

import { registerWorker, reset } from "../../../features/worker/workerSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const RegisterWorker = () => {
    const [formData, setFormData] = useState({
        birthday: '',
        // barber: true,
        // hairdresser: false,
        // dayAvailable: '',
        // timeAvailable: '',
        // averageCostHairdress: '',
        // averageCostBarber: '',
        // profilePicture: '',
     
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isSuccess, message, isError } = useSelector((state) => state.auth);

    useEffect(() => {
      if (isError) {
          alert(message);
      };

      dispatch(reset());

    }, [user, isError, isSuccess, message, navigate, dispatch])

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        setFormData((prevState) => {
            return ({
                ...prevState,
                [name] : type === 'checkbox'? checked : value
            })
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerWorker(formData));

        //navigate('/')
    }

  return (
    <div className='registerWorker'>
        <div className='registerWorker--wrap'>
            <h1>Registrarme como trabajador</h1>
            <form onSubmit={handleSubmit} className='registerWorker--wrap--form'>
                <div className='registerWorker--wrap--form--birthday'>
                    <label>Fecha de nacimiento</label>
                    <input
                        type="date"
                        placeholder="Fecha de nacimiento"
                        onChange={handleChange}
                        name="birthday"
                        value={formData.birthday}
                    />
                </div>
                <div className='registerWorker--wrap--form--photo'>
                    <label>Seleccionar foto de perfil</label>
                    <FileBase
                        type='file'
                        multiple={false}
                        onDone={({base64}) => setFormData({...formData, profilePicture: base64})}
                    />
                </div>
                <div className='registerWorker--wrap--form--profesion'>
                    <label>Mi profesión es</label>
                    <div className='registerWorker--wrap--form--profesion--checkbox'>
                        <div>
                            <input 
                                type="checkbox" 
                                id="barber" 
                                checked={formData.barber}
                                onChange={handleChange}
                                name="barber"
                            />
                            <label htmlFor="barber">Barbero</label>
                        </div>
                        <div>
                            <input 
                                type="checkbox" 
                                id="hairdresser" 
                                checked={formData.hairdresser}
                                onChange={handleChange}
                                name="hairdresser"
                            />
                            <label htmlFor="hairdresser">Peluquero</label>
                        </div>
                    </div>
                </div>
                <div className='registerWorker--wrap--form--availability'>
                    <label>Disponibilidad</label>
                    <input
                        type="text"
                        placeholder="Día (Ej: LUN a VIE)"
                        onChange={handleChange}
                        name="dayAvailable"
                        value={formData.dayAvailable}
                    />
                    <input
                        type="text"
                        placeholder="Hora (Ej: 8 a 18)"
                        onChange={handleChange}
                        name="timeAvailable"
                        value={formData.timeAvailable}
                    />
                </div>
                <div className='registerWorker--wrap--form--cost'>
                    <label>Costo promedio</label>
                    {formData.hairdresser&&<input
                        type="text"
                        placeholder="Servicio peluqueria"
                        onChange={handleChange}
                        name="averageCostHairdress"
                        value={formData.averageCostHairdress}
                    />}
                    {formData.barber&&<input
                        type="text"
                        placeholder="Servicio barbería"
                        onChange={handleChange}
                        name="averageCostBarber"
                        value={formData.averageCostBarber}
                    />}
                </div>
                <button>REGISTRARME</button>

            </form>
        </div>    
    </div>
  )
}

export default RegisterWorker