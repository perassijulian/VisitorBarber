import { useState } from 'react';
import './styles/App.scss';
import AddWorker from './components/AddWorker';
import LoginOld from './components/Login';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import { useSelector } from 'react-redux';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MyAccount from './components/MyAccount';
import Register from './pages/Register';
import Login from './pages/Login';


function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showAddWorker, setShowAddWorker] = useState(false);
  const [showLanding, setShowLanding] = useState(true);

  const Auth = useSelector(state => state.Auth);

  return (
    <div className="App">
      <Router>
        <Navbar
          Auth={Auth} 
          setShowLogin={setShowLogin} 
          showLogin={showLogin}
          setShowAddWorker= {setShowAddWorker}
          showAddWorker={showAddWorker}
          setShowLanding={setShowLanding}
        />
        <Routes>
          <Route path='/' element={
            <div>
              {showLogin && 
                <LoginOld 
                  Auth={Auth} 
                  setShowLogin={setShowLogin}
                  setShowAddWorker= {setShowAddWorker}
                  showAddWorker={showAddWorker}
                />
              }
              {showAddWorker && <AddWorker setShowAddWorker={setShowAddWorker} />}
              {showLanding && <Landing setShowLanding={setShowLanding} />}
              <Main showLogin={showLogin} />
            </div>
          } />   
          <Route path='/user/login' element={<Login />} />
          <Route path='/user/signup' element={<Register />} />
          <Route path='/user/my-account' element={<MyAccount />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;