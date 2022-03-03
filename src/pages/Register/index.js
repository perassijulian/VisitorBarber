import { useEffect, useState } from "react";
import './styles.scss';

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, reset } from "../../features/auth/authSlice";
import RegisterWorker from "./RegisterWorker";

const Register = () => {
    const [consent, setConsent] = useState(false);
    const [privacy, setPrivacy] = useState(false);
    const [worker, setWorker] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        password2: ''
    });

    const { name, username, password, password2 } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isSuccess, message, isError } = useSelector((state) => state.auth);

    useEffect(() => {
      if (isError) {
          alert(message);
      };

      if (isSuccess || user) {
          navigate('/')
      };

      dispatch(reset());

    }, [user, isError, isSuccess, message, navigate, dispatch])
    

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
        
        if (password !== password2) {
            alert('Las contraseñas deben coincidir')
        } else {

            if (worker) {
                navigate('/user/worker')
            } else {
                const userData = {
                    name,
                    username,
                    password,
                }

                console.log(userData)
    
                //dispatch(register(userData));
            }
        }
    }

  return (
    <div className="register">
        <div className="register--wrap">
            <div className="register--wrap--header">
                <h1>Nueva cuenta</h1>
                <p>Crea tu nueva cuenta</p>
            </div>
            <div className="register--wrap--body">
                <form onSubmit={handleSubmit} className="register--wrap--body--form">
                    <input type='text' name="name" value={name} placeholder='Inserta tu nombre' onChange={onChange}></input>
                    <input type='email' name="username" value={username} placeholder='Inserta tu email' onChange={onChange}></input>
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