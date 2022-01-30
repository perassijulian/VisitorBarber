import React, {useState, useRef, useEffect} from 'react';
import '../styles/Login.scss'

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loginRef = useRef();

    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
    }

    function handleClose (e) {
        if (e.target===loginRef.current) {
            props.setShowLogin(false);
        }
    }

    const openAddWorker = () => {
        props.setShowLogin(false);
        props.setShowAddWorker(!props.showAddWorker);
    }

    useEffect(() => {
      const getClick = window.addEventListener('click', handleClose);
    
      return () => {
        getClick();
        window.removeEventListener('click', handleClose);
      };
    }, []);
    

    return (

        <div ref={loginRef} className='login'>
            <div className='login--box'>  
                <div className='login--box--header'>
                    <div></div>
                    <h2>Logeate o registrate</h2>
                    <div className='login--box--header--close' onClick={()=>{props.setShowLogin(false)}}>X</div>
                </div>
                <hr />
                <h1>Bienvenido a Visitor Barber</h1>
                <form className='login--box--login' onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Contraseña</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" disabled={!validateForm()}>
                    Continuar
                    </button>
                    <p onClick={openAddWorker}>Registrate</p>
                </form>
                <br />
                <hr />
                <div className='login--box--socials'>
                    <button className='login--box--socials--fb'>Continuar con Facebook</button>
                    <button className='login--box--socials--google'>Continuar con Google</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
