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
            console.log(props.setShowLanding(false));
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
                <h2>Logeate o registrate</h2>
                <h1>Bienvenido a Visitor Barber</h1>
                <form className='landing--login' onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" disabled={!validateForm()}>
                    Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Landing;
