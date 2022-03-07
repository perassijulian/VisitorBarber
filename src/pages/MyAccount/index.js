import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAccount, reset } from "../../features/auth/authSlice";
import { getWorkerInfo } from "../../features/worker/workerSlice";
import { useNavigate } from 'react-router-dom';
import './styles.scss';


const MyAccount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector (state => state.auth.user);
  const workerInfo = useSelector (state => state.worker.user);


  useEffect(() => {
    dispatch(getAccount());
    
    if (user.worker) {
      dispatch(getWorkerInfo())
      console.log('MyAccount workerInfo', workerInfo)
    } else {
      console.log(' MyAccount vago')
    }

    console.log(workerInfo)

  
  }, [workerInfo._id, user.username])
  
  
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