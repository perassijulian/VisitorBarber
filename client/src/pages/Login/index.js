import { useState } from "react";
import './styles.scss';

import { useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const { username, password } = formData;

    const dispatch = useDispatch();

    const { isFetching, error } = useSelector((state) => state.user);

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
        login(dispatch, { username, password });
    }
    
  return (
    <div className="login">
        <div className="login--wrap">
            <div className="login--wrap--header">
                <h1>Ingresar </h1>
                <p>Ingresa tu nombre de usuario y contraseña</p>
            </div>
            <div className="login--wrap--body">
                <form onSubmit={handleSubmit} className="login--wrap--body--form">
                    <input 
                        name="username" 
                        value={username} 
                        placeholder='Inserta tu nombre de usuario' 
                        onChange={onChange}
                    ></input>
                    <input 
                        type='password' 
                        name="password" 
                        value={password} 
                        placeholder='Inserta tu contraseña' 
                        onChange={onChange}
                    ></input>
                    <button disabled={isFetching}>INGRESAR</button>
                    {error && <p>Something went wrong...</p>}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login