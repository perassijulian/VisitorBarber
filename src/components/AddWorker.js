import React, { useEffect, useRef, useState } from 'react';
import '../styles/AddWorker.scss'

const AddWorker = () => {
    const addWorkerRef = useRef();
    
    const [formData, setFormData] = useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            emailVerif: "", 
            birthday: "",
            privacy: false,
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
        event.preventDefault()
        // submitToApi(formData)
        console.log(formData)
    }

    /**
    const handleClose = (e) => {
        console.log(e.target);
    }

    useEffect(() => {
      const getClick = window.addEventListener('click', handleClose);
    
      return () => {
        
      };
    },);
     */

  return (
    <div ref={addWorkerRef} className='addWorker'>
        <div className='addWorker--box'>
            <div className='addWorker--box--header'>
                <div></div>
                <h2>Registrate como TRABAJADOR</h2>
                <div className='addWorker--box--header--close'>X</div>
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
                    <label htmlFor="consent">He leido y estoy de acuerdo con el aviso de privacidad</label>
                </div>
                <button>Submit</button>
            
            </form>
        </div>
    </div>);
};

export default AddWorker;
