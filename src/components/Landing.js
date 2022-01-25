import React, {useState, useRef, useEffect} from 'react';
import '../styles/Landing.scss'

const Landing = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const landingRef = useRef();

    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
    }

    function handleClose (e) {
        if (e.target===landingRef.current) {
            props.setShowLanding(false);
        }
    }

    useEffect(() => {
      const getClick = window.addEventListener('click', handleClose);
    
      return () => {
        getClick();
      };
    }, []);
    

    return (

        <div ref={landingRef} className='landing'>
            <div className='landing--box'>  
                <div className='landing--box--header'>
                    <div></div>
                    <h2>Logeate o registrate</h2>
                    <div className='landing--box--header--close' onClick={()=>{props.setShowLanding(false)}}>X</div>
                </div>
                <hr />
                <h1>Bienvenido a Visitor Barber</h1>
                <form className='landing--box--login' onSubmit={handleSubmit}>
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
                    <a href='/'>Registrate</a>
                </form>
                <br />
                <hr />
                <div className='landing--box--socials'>
                    <button className='landing--box--socials--fb'>Continuar con Facebook</button>
                    <button className='landing--box--socials--google'>Continuar con Google</button>
                </div>
            </div>
        </div>
    );
}

export default Landing;
