import React, { useEffect, useRef, useState } from 'react';
import '../styles/AddWorker.scss'

const AddWorker = (props) => {
    const addWorkerRef = useRef();

    const [worker, setWorker] = useState([]);
    const [user, setUser] = useState([]);
    
    const [formData, setFormData] = useState(
        {
            userId:"",
            firstName: "", 
            lastName: "", 
            email: "", 
            emailVerif: "", //I can take out this one and just verify it on the front end
            birthday: "",
            user:false,
            worker:false,
            privacy: false, //may I quit them and just use them to dissable the button?
            consent: false
        }
    )

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        let finalId = worker.length + user.length;
        formData.userId = finalId;
        console.log(formData)
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
        }
        
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
                        name="email"
                        value={formData.email}
                    />
                    <input
                        type="email"
                        placeholder="Repetir mail"
                        onChange={handleChange}
                        name="emailVerif"
                        value={formData.emailVerif}
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
                    <label>Quiero registrarme como</label>
                    <div className='addWorker--box--form--definition--checkbox'>
                        <input 
                            type="checkbox" 
                            id="user" 
                            checked={formData.user}
                            onChange={handleChange}
                            name="user"
                        />
                        <label htmlFor="user">Usuario</label>
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
                {formData.worker &&
                    <div className='addWorker--box--form--photo'>
                        <label>Seleccionar foto de perfil</label>
                        <input type="file" name="file"  />
                    </div> 
                }
                <div>
                    <input 
                        type="checkbox" 
                        id="privacy" 
                        checked={formData.privacy}
                        onChange={handleChange}
                        name="privacy"
                    />
                    <label htmlFor="privacy">He leido y estoy de acuerdo con el aviso de privacidad</label>
                </div>
                <div>
                    <input 
                        type="checkbox" 
                        id="consent" 
                        checked={formData.consent}
                        onChange={handleChange}
                        name="consent"
                    />
                    <label htmlFor="consent">He leido y estoy de acuerdo con consentimiento</label>
                </div>
                
                <button disabled={!formData.consent || !formData.privacy}>Registrarme</button>
            
            </form>
        </div>
    </div>);
};

export default AddWorker;
