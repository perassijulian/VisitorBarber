import { useState } from 'react';
import axios from 'axios';
import './styles.scss';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerWorker } from "../../redux/workerService";
import { userRequest } from '../../requestMethods';

//requerir que si sos worker tengas que tener una img y si sos solo usuario no hace falta

const RegisterWorker = ({setRefresh}) => {
    const [showcase, setShowcase] = useState([]);
    const [formData, setFormData] = useState({
        birthday: '',
        barber: true,
        hairdresser: false,
        dayAvailable: '',
        timeAvailable: '',
        averageCostHairdress: '',
        averageCostBarber: '',
        showcasePictures: [],
    })

    const accessToken = useSelector((state) => state.user.currentUser.accessToken);

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

        if (showcase.length !== 0) {
            const showcasePictures = await Promise.all(
                Object.values(showcase).map(async (file) => {
                    const data = new FormData();
                    data.append("file", file);
                    data.append("upload_preset", "upload");
                    const uploadRes = await axios.post(
                    "https://api.cloudinary.com/v1_1/julianjulian/image/upload",
                    data
                    );
        
                    const { url } = uploadRes.data;
                    return url;
                })
            );
            const workerData = {...formData, showcasePictures};
            try {
                // await userRequest.post("/worker/register", workerData, 
                // { headers: 
                //     { token: `access_token=${accessToken}`}
                // })
                registerWorker(dispatch, workerData, accessToken)
            } catch (err) {
                console.log(err)
            }
            setRefresh(true);
        } else {
            alert('Por favor seleccioná al menos 3 trabajos que hayas realizado.')
        };
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
                    <button>Registrarme como usuario</button>
                </form>
            </div>    
        </div>
    )
}

export default RegisterWorker