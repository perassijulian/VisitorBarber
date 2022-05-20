import { useState } from 'react';
import axios from 'axios';
import './styles.scss';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerWorker } from "../../redux/workerService";


// //pasar el input de la foto de perfil a la parte de la carga del usuario
//lograr la carga de fotos tanto de perfil como de showcase => showcase carga pero la de perfil me tira error
//chequear haciendo un clg en el button de submit
//hacer la api call y chequerar correcta carga en la DB
//requerir que si sos worker tengas que tener una img y si sos solo usuario no hace falta

const RegisterWorker = ({ formData, setFormData, showcase, setShowcase }) => {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <div className='registerWorker'>
            <div className='registerWorker--wrap'>
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
                    <div className='registerWorker--wrap--form--worksphoto'>
                        <div>
                            <div>Seleccionar trabajos realizados</div>
                            <label><small>(utilice la tecla <b>ctrl</b> para seleccionar varios)</small></label>
                        </div>
                        <label className='inputFile'>
                            <input
                                type="file"
                                id="file"
                                multiple
                                onChange={(e) => setShowcase(e.target.files)}
                            />
                            { showcase.length !== 0 ? "✔️" : "Añadir" }
                        </label>
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
                </form>
            </div>    
        </div>
    )
}

export default RegisterWorker