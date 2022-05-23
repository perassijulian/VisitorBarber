import { useState } from "react";
import './styles.scss';

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../redux/apiCalls";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { userRequest } from "../../requestMethods";

const Register = () => {
    const [consent, setConsent] = useState(false);
    const [privacy, setPrivacy] = useState(false);
    const [isWorker, setIsWorker] = useState(false);
    const [file, setFile] = useState(null);

    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        password2: '',
        img: '',
        isWorker: false,
    });

    const { email, username, password, password2 } = formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => {
            return({
                ...prevState,
                [name]: value
            })
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== password2) {
            alert("Your passwords are not equal") 
        } else {
            try {
                if (file) {
                    const data = new FormData();
                    data.append("file", file[0]);
                    data.append("upload_preset", "upload2");
                    const uploadRes = await axios.post(
                        "https://api.cloudinary.com/v1_1/julianjulian/image/upload",
                        data
                    );
                    const { url } = uploadRes.data;
                    const userData = {...formData, img: url, isWorker}
                    await register(dispatch, userData);
                } else {
                    const userData = {...formData, isWorker}
                    register(dispatch, userData)
                }
            } catch (err) {
                console.log(err)
            }
            navigate('/my-account');
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
                        <div className='register--wrap--body--form--photo'>
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
                        <div className="register--wrap--body--form--worker">
                            <input 
                                type="checkbox" 
                                checked={isWorker}
                                onChange={()=>{setIsWorker(!isWorker)}}
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
                        <button disabled={!consent || !privacy}>{!isWorker? "REGISTRARME" : "CONTINUAR"}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register