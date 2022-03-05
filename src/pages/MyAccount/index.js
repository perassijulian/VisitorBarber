import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAccount, reset } from "../../features/auth/authSlice";
import { useNavigate } from 'react-router-dom';
import './styles.scss';


const MyAccount = () => {
  // const { user } = useSelector (state => state.auth);
  // const stateStore = useSelector (state => state);

  // console.log('stateStore', stateStore);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('my-account')
    dispatch(getAccount());
  
  }, [])
  
  
  return (
    <div className='myAccount'>
      <div className='myAccount--wrap'>
        <h1>Mi cuenta</h1>
        <h4>Hola, !</h4>
        <button onClick={() => {navigate('/user/worker')}}>Registrarme como trabajador</button>

      </div>
    </div>
  )
}

export default MyAccount