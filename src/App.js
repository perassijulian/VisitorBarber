import { useEffect, useState } from 'react';
import './styles/App.scss';
import AddWorker from './components/AddWorker';
import Login from './components/Login';
import Main from './components/Main';
import Navbar from './components/Navbar';
import PickDate from './components/PickDate';
import Landing from './components/Landing';
import { useSelector } from 'react-redux';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import MyAccount from './components/MyAccount';


function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showAddWorker, setShowAddWorker] = useState(false);
  const [showLanding, setShowLanding] = useState(true);

  const Auth = useSelector(state => state.Auth);

  return (
    <Router>
    <div className="App">
      
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
            <Login 
              Auth={Auth} 
              setShowLogin={setShowLogin}
              setShowAddWorker= {setShowAddWorker}
              showAddWorker={showAddWorker}
          />}
          {showAddWorker && <AddWorker setShowAddWorker={setShowAddWorker} />}
          {showLanding && <Landing setShowLanding={setShowLanding} />}
          <Main showLogin={showLogin} />
        </div>
      } /> 
        
        <Route path='/my-account' element={<MyAccount />} />
      </Routes>

    </div>
    </Router>
  );
}

export default App;