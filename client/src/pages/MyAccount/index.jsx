import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../components/Navbar';
import RegisterWorker from '../../components/RegisterWorker';
import { useNavigate } from 'react-router-dom';
import './styles.scss';
import { getWorker } from '../../redux/workerService';

const MyAccount = () => {
  const [showRegisterWorker, setShowRegisterWorker] = useState(false);
  const [refresh, setRefresh] = useState(false);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const user = useSelector((state) => state.user.currentUser);
  const id = user._id
  const { isFetching, workerInfo } = useSelector(state => state.worker);

  // useEffect(() => {
  //   const getWorkerInfo = async () => {
  //     try {
  //       const res = await publicRequest.get(`/worker/find/${id}`);
  //       setWorkerInfo(res.data[0]);
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   if (user.isWorker) {
  //     getWorkerInfo();
  //   }
  // }, [id, user.isWorker, refresh])

  useEffect(() => {
    getWorker(dispatch, id);
  }, [])
  
  useEffect(() => {
    if (user.isWorker) {
      if (workerInfo) {
        setShowRegisterWorker(false);
      } else {
        setShowRegisterWorker(true);
      }
    }  
  }, [workerInfo, user.isWorker, refresh])
  
  return (
    <div className='myAccount'>
      <Navbar />
      {!isFetching && 
        <div className='myAccount--wrap'>
          <div className='myAccount--wrap--header'>
            <h1>Hola, {user.username} !</h1>
            {user.img && 
              <img src={user.img} alt='profile' />
            }
          </div>
          <h2>Tu información personal</h2>

          <div className='myAccount--body'>
            <div className='myAccount--body--item'>
              <h4>Email:</h4>
              <h4>{user.email}</h4>
            </div>
          </div>
          {showRegisterWorker && 
            <RegisterWorker setRefresh={setRefresh} />
          }
          {workerInfo && 
            <>
              {workerInfo.birthday && 
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
                    <h4>{workerInfo.showcasePictures?.length}</h4>
                  </div>
                  <div className='showcase'>
                    {workerInfo.showcasePictures.map((p,i) => (
                      <img src={workerInfo.showcasePictures[i]} key={i} alt='showcase' />
                    ))}
                  </div>
                </div>
              }
              {!workerInfo.birthday &&
                <button className='mButton' onClick={'dispatch a put on users making isWorker=true'}>Registrarme como trabajador</button>
              }
              {workerInfo.birthday &&
                <button className='mButton' onClick={() => alert('para hacer')}>Modificar mis datos</button>
              }
            </>
          }
        </div>
      }
    </div>
  )
}

export default MyAccount