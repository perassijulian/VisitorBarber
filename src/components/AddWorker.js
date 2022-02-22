import React, { useEffect, useRef, useState } from 'react';

import { signupUser } from '../actions/users';
import { useDispatch } from 'react-redux';
import '../styles/AddWorker.scss';

const AddWorker = (props) => {
    const addWorkerRef = useRef();

    const [worker, setWorker] = useState([]);
    const [user, setUser] = useState([]);

    const [privacy, setPrivacy] = useState(false);
    const [consent, setConsent] = useState(false);
    const [verifMail, setVerifMail] = useState("");
    const [verifPassword, setVerifPassword] = useState("");
    
    const [formData, setFormData] = useState(
        {
            firstName: "", 
            lastName: "", 
            username: "",
            password: ""


            // birthday: "",
            // user:false,
            // worker:false,
            // barber: false,
            // hairdresser:false,
            // timeAvailable: "",
            // dayAvailable:"",
            // amountServicesProvided:0,
            // averageCostMain:"",
            // averageCostSec:"" 
        }
    )

    const dispatch = useDispatch();

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    const handleSaveToPC = (jsonData) => {
        /**const fileData = JSON.stringify(jsonData);
        const blob = new Blob([fileData], {type: "text/plain"});
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `${filename}.json`;
        link.href = url;
        link.click();*/
        
      }

    function handleSubmit(event) {
        event.preventDefault();
        
        //TBD VALIDATIONS
        // if(formData.email !== verifMail) {
        //     alert("Your mails does not match. Verify them");
        //     return;
        // }
        // if(formData.name===""){
        //     alert("You need to provide a valid name");
        //     return;
        // }

        dispatch(signupUser(formData));
        alert('Gracias por registrarse!');
        props.setShowAddWorker(false);
        
    }

    
    const handleClose = (e) => {
        if(e.target===addWorkerRef.current) {
            props.setShowAddWorker(false)
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
    <div ref={addWorkerRef} className='addWorker'>
        <div className='addWorker--box'>
            <div className='addWorker--box--header'>
                <div></div>
                <h2>Registrate</h2>
                <div className='addWorker--box--header--close' onClick={() => {props.setShowAddWorker(false)}}>X</div>
            </div>
            <hr />
            <h1>Bienvenido a Visitor Barber</h1>
            <form className='addWorker--box--form' onSubmit={handleSubmit}>
                <label>Nombre completo</label>
                <div className='addWorker--box--form--fullName'>
                    <input
                        type="text"
                        placeholder="Nombre"
                        onChange={handleChange}
                        name="firstName"
                        value={formData.firstName}
                    />
                    <input
                        type="text"
                        placeholder="Apellido"
                        onChange={handleChange}
                        name="lastName"
                        value={formData.lastName}
                    />
                </div>
                <label>Dirección de mail</label>
                <div className='addWorker--box--form--email'>
                    <input
                        type="email"
                        placeholder="Mail registrado en VB"
                        onChange={handleChange}
                        name="username"
                        value={formData.username}
                    />
                    <input
                        type="email"
                        placeholder="Repetir mail"
                        onChange={(e)=>{setVerifMail(e.target.value)}}
                        value={verifMail}
                    />
                </div>
                <div className='addWorker--box--form--birthday'>
                    <label>Fecha de nacimiento</label>
                    <input
                        type="date"
                        placeholder="Fecha de nacimiento"
                        onChange={handleChange}
                        name="birthday"
                        value={formData.birthday}
                    />
                </div>
                <div className='addWorker--box--form--definition'>
                    <label>Registrarme como</label>
                    <div className='addWorker--box--form--definition--checkbox'>
                        <div>
                            <input 
                                type="checkbox" 
                                id="user" 
                                checked={formData.user}
                                onChange={handleChange}
                                name="user"
                            />
                            <label htmlFor="user">Usuario</label>
                        </div>
                        <div>
                            <input 
                                type="checkbox" 
                                id="worker" 
                                checked={formData.worker}
                                onChange={handleChange}
                                name="worker"
                            />
                            <label htmlFor="worker">Trabajador</label>
                        </div>
                    </div>
                </div>
                {formData.worker &&
                <div>
                    <div className='addWorker--box--form--photo'>
                        <label>Seleccionar foto de perfil</label>
                        <input type="file" name="file"  />
                    </div>
                    <div className='addWorker--box--form--profesion'>
                        <label>Mi profesión es</label>
                        <div className='addWorker--box--form--profesion--checkbox'>
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
                    <label>Disponibilidad</label>
                    <div className='addWorker--box--form--availability'>
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
                    <label>Costo promedio</label>
                    <div className='addWorker--box--form--cost'>
                        {formData.hairdresser&&<input
                            type="text"
                            placeholder="Servicio peluqueria"
                            onChange={handleChange}
                            name="averageCostMain"
                            value={formData.averageCostMain}
                        />}
                        {formData.barber&&<input
                            type="text"
                            placeholder="Servicio barbería"
                            onChange={handleChange}
                            name="averageCostSec"
                            value={formData.averageCostSec}
                        />}
                    </div>

                </div>    

                }
                <div className='addWorker--box--form--password'>
                    <input
                        type="password"
                        placeholder="Contraseña"
                        onChange={handleChange}
                        name="password"
                        value={formData.password}
                    />
                    <input
                        type="password"
                        placeholder="Repetir contraseña"
                        onChange={(e)=>{setVerifPassword(e.target.value)}}
                        value={verifPassword}
                    />
                </div>
                <div>
                    <input 
                        type="checkbox" 
                        checked={privacy}
                        onChange={()=>{setPrivacy(!privacy)}}
                    />
                    <label htmlFor="privacy">He leido y estoy de acuerdo con el aviso de privacidad</label>
                </div>
                <div>
                    <input 
                        type="checkbox"  
                        checked={consent}
                        onChange={()=>{setConsent(!consent)}}
                    />
                    <label htmlFor="consent">He leido y estoy de acuerdo con consentimiento</label>
                </div>
                
                <button disabled={!consent || !privacy}>Registrarme</button>
            
            </form>
        </div>
    </div>);
};

export default AddWorker;