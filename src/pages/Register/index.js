import { useState } from "react";
import { FaUser } from "react-icons/fa";
import './styles.scss'


const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        password2: ''
    });

    const { name, username, password, password2 } = formData;

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
    <div className="register">
        <div className="register--header">
            <h1>
                <FaUser /> Nueva cuenta
            </h1>
            <p>Crea tu nueva cuenta</p>
        </div>
        <div className="register--body">
            <form onSubmit={handleSubmit} className="register--body--form">
                <input type='text' name="name" value={name} placeholder='Inserta tu nombre' onChange={onChange}></input>
                <input type='email' name="username" value={username} placeholder='Inserta tu email' onChange={onChange}></input>
                <input type='password' name="password" value={password} placeholder='Inserta tu contraseña' onChange={onChange}></input>
                <input type='password' name="password2" value={password2} placeholder='Repite tu contraseña' onChange={onChange}></input>
                <button>CREAR</button>
            </form>
        </div>
    </div>
  )
}

export default Register