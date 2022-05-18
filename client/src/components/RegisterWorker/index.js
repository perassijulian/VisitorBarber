import { useState } from 'react';
import axios from 'axios';
import './styles.scss';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerWorker } from "../../redux/workerService";

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
        showcasePictures: [],
    }
    const [formData, setFormData] = useState(cleanFormData);

    const [showcase, setShowcase] = useState("");
    const [file, setFile] = useState("");

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
                <div className='registerWorker--wrap--form--photo'>
                    <label>Seleccionar foto de perfil</label>
                    <label className='inputFile'>
                        <input
                            type="file"
                            id="file"
                            onChange={(e) => setFile(e.target.files)}
                        />
                        { file? "✔️" : "Añadir" }
                    </label>
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
                        { showcase? "✔️" : "Añadir" }
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