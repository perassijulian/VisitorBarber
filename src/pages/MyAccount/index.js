import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './styles.scss';


const MyAccount = () => {
  const { user } = useSelector (state => state.auth);

  const navigate = useNavigate();

  console.log('my-account', user);
  
  return (
    <div className='myAccount'>
      <div className='myAccount--wrap'>
        <h1>Mi cuenta</h1>
        <h4>Hola, {user.name} !</h4>
        <button onClick={() => {navigate('/user/worker')}}>Registrarme como trabajador</button>
        

      </div>
    </div>
  )
}

export default MyAccount