import { useEffect, useState } from "react";
import './styles.scss';

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../../features/auth/authSlice";
import { FaSignInAlt } from "react-icons/fa";


const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const { username, password } = formData;

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
        
        const userData = {
            username,
            password,
        }

        dispatch(login(userData));
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
                    <input type='email' name="username" value={username} placeholder='Inserta tu email' onChange={onChange}></input>
                    <input type='password' name="password" value={password} placeholder='Inserta tu contraseña' onChange={onChange}></input>
                    <button>INGRESAR</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login