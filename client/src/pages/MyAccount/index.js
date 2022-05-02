import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAccount} from "../../features/auth/authSlice";
import { getWorkerInfo, reset } from "../../features/worker/workerSlice";
import { useNavigate } from 'react-router-dom';
import './styles.scss';


const MyAccount = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.currentUser);
  const { isError, isLoading, isSuccess, message, workerInfo } = useSelector (state => state.worker);
  const totalState = useSelector (state => state);
  console.log('myAccount totalstate', totalState)


  // dispatch(getWorkerInfo())

  // useEffect(() => {
  //   if (isError) {
  //     console.log(message);
  //   };

  //   if(!user) {
  //     navigate('/user/login')
  //   }


  //   console.log('dispatch getWorkerInfo')
    


  // }, [user, navigate, isError, message, dispatch])
  
  // if (isLoading) {
  //   return(<h1>Loading</h1>)
  // }
  
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
          <div className='myAccount--body--item'>
            <h4>Días disponibles:</h4>
            <h4>{workerInfo.dayAvailable}</h4>
          </div>
          <div className='myAccount--body--item'>
            <h4>Horarios disponibles:</h4>
            <h4>{workerInfo.timeAvailable}</h4>
          </div>
          {workerInfo.barber && <div className='myAccount--body--item'>
            <h4>Costo promedio barbería:</h4>
            <h4>{workerInfo.averageCostBarber}</h4>
          </div>}
          {workerInfo.hairdresser && <div className='myAccount--body--item'>
            <h4>Costo promedio peluquería:</h4>
            <h4>{workerInfo.averageCostHairdress}</h4>
          </div>}
        </div>
        <button onClick={() => {navigate('/user/worker')}}>Registrarme como trabajador</button>

      </div>
    </div>
  )
}

export default MyAccount