import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import './styles.scss';

import { registerWorker } from "../../../features/worker/workerSlice";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RegisterWorker = () => {
    const cleanFormData = {
        birthday: '',
        barber: true,
        hairdresser: false,
        dayAvailable: '',
        timeAvailable: '',
        averageCostHairdress: '',
        averageCostBarber: '',
        profilePicture: '',
    }
    const [formData, setFormData] = useState(cleanFormData);

    const navigate = useNavigate();
    const dispatch = useDispatch();

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
//make PUT request to user to upload user.worker. Cause it need to be done once registerWorker.fulfilled
        navigate('/user/my-account');
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
                <div className='registerWorker--wrap--form--worksphoto'>
                    <label>Seleccionar trabajos Realizados</label>
                    <FileBase
                        type='file'
                        multiple={true}
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