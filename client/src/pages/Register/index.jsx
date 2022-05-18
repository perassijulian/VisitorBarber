import { useState } from "react";
import './styles.scss';

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../redux/apiCalls";
import RegisterWorker from "../../components/RegisterWorker";
import Navbar from "../../components/Navbar";

const Register = () => {
    const [consent, setConsent] = useState(false);
    const [privacy, setPrivacy] = useState(false);
    const [worker, setWorker] = useState(false);

    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        password2: ''
    });

    const { email, username, password, password2 } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    
// //ONCE WORKING REWRITE THIS
//         if (worker) {
//             if (isSuccess || user) {
//                 navigate('/user/worker')
//             }
//         } else {
//             if (isSuccess || user) {
//                 navigate('/')
//                 dispatch(reset());
//             }
//         }

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => {
            return({
                ...prevState,
                [name]: value
            })
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        password !== password2 
          ? alert("Your passwords are not equal") 
          : register(dispatch, {username, email, password, worker})
        //make PUT request to user to upload user.worker. Cause it need to be done once registerWorker.fulfilled at <RegisterWorker />
        if (worker) {
            navigate('/user/worker')
        }
    }


  return (
    <div className="register">
        <Navbar />
        <div className="register--wrap">
            <div className="register--wrap--header">
                <h1>Nueva cuenta</h1>
                <p>Crea tu nueva cuenta</p>
            </div>
            <div className="register--wrap--body">
                <form onSubmit={handleSubmit} className="register--wrap--body--form">
                    <input type='text' name="username" value={username} placeholder='Inserta usuario' onChange={onChange}></input>
                    <input type='email' name="email" value={email} placeholder='Inserta tu email' onChange={onChange}></input>
                    <input type='password' name="password" value={password} placeholder='Inserta tu contraseña' onChange={onChange}></input>
                    <input type='password' name="password2" value={password2} placeholder='Repite tu contraseña' onChange={onChange}></input>
                    <div className="register--wrap--body--form--worker">
                        <input 
                            type="checkbox" 
                            checked={worker}
                            onChange={()=>{setWorker(!worker)}}
                        />
                        <label htmlFor="worker">Quiero registrarme como prestador de servicio</label>
                    </div>
                    {worker && <RegisterWorker />}
                    <div className="register--wrap--body--form--readables">
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
                    </div>
                    <button disabled={!consent || !privacy}>{!worker? "REGISTRARME" : "CONTINUAR"}</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register