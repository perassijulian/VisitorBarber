import { useState } from 'react';
import './styles.scss';

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const { username, password } = formData;

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
        console.log(formData);
    }
  return (
    <div className="login">
        <div className="login--header">
            <h1>
                Ingresar
            </h1>
            <p>Ingresa tu nombre de usuario y contraseña</p>
        </div>
        <div className="login--body">
            <form onSubmit={handleSubmit} className="login--body--form">
                <input type='email' name="username" value={username} placeholder='Inserta tu email' onChange={onChange}></input>
                <input type='password' name="password" value={password} placeholder='Inserta tu contraseña' onChange={onChange}></input>
                <button>INGRESAR</button>
            </form>
        </div>
    </div>
  )
}

export default Login