import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAccount} from "../../features/auth/authSlice";
//import { getWorkerInfo, reset } from "../../features/worker/workerSlice";
import { useNavigate } from 'react-router-dom';
import './styles.scss';
import axios from 'axios';


const MyAccount = () => {
  const [workerInfo, setWorkerInfo] = useState({})
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const state = useSelector(state => state);
  console.log(state)
  const user = useSelector((state) => state.user.currentUser);
  //const { workerInfo } = useSelector (state => state.worker);

  useEffect(() => {
    const getWorkerInfo = async () => {
      try {
        setWorkerInfo(await axios('/api/worker/my-account'));
        console.log('workerInfo: ', workerInfo)
      } catch (error) {
        console.log(error)
      }
    }
    getWorkerInfo();
  }, [])
  

  console.log(user.username)

  return (
    <div className='myAccount'>
      {/**<div className='myAccount--wrap'>
        <div className='myAccount--wrap--header'>
          <h1>Hola, {user.username} !</h1>
          {workerInfo.profilePicture && 
            <img src={workerInfo.profilePicture} alt='profile' />
          }
        </div>
        <h2>Tu información personal</h2>
        
        {user.isWorker && 
          <div className='myAccount--body'>
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
            <div className='myAccount--body--item'>
              <h4>Trabajos realizados:</h4>
              <h4>{workerInfo.showcasePictures.length}</h4>
            </div>
            <div className='showcase'>
              <img src={workerInfo.profilePicture} alt='showcase' />
              <img src={workerInfo.profilePicture} alt='showcase' />
              <img src={workerInfo.profilePicture} alt='showcase' />
            </div>
          </div>
        }
        {!user.isWorker &&
          <button onClick={() => {navigate('/user/worker')}}>Registrarme como trabajador</button>
        }
      </div>**/}
    </div>
  )
}

export default MyAccount