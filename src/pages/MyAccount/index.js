import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAccount, reset } from "../../features/auth/authSlice";
import { getWorkerInfo } from "../../features/worker/workerSlice";
import { useNavigate } from 'react-router-dom';
import './styles.scss';


const MyAccount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector (state => state.auth.user);
  const { isError, isLoading, isSuccess, message, workerInfo } = useSelector (state => state.worker);

  console.log(workerInfo)

  useEffect(() => {
    if(!user) {
      navigate('/user/login')
    }
  }, [user, navigate])
  
  
  return (
    <div className='myAccount'>
      <div className='myAccount--wrap'>
        <h1>Hola, {user.name} !</h1>
        <div className='myAccount--body'>
          <h2>Tu información personal</h2>
          <div className='myAccount--body--item'>
            <h4>Fecha de nacimiento:</h4>
            <h4>{workerInfo.birthday}</h4>
          </div>
        </div>
        <button onClick={() => {navigate('/user/worker')}}>Registrarme como trabajador</button>

      </div>
    </div>
  )
}

export default MyAccount