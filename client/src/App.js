import { useState } from 'react';
import './styles.scss';

import Navbar from './components/Navbar';
import Main from './components/Main';
import Landing from './components/Landing';

import { useSelector } from 'react-redux';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import MyAccount from './pages/MyAccount';
import Register from './pages/Register';
import Login from './pages/Login';
import RegisterWorker from './pages/Register/RegisterWorker';


function App() {
  const [showLanding, setShowLanding] = useState(true);

  const Auth = useSelector(state => state.Auth);
  const user = useSelector((state) => state.user.currentUser);


  return (
    <div className="App">
      <Router>
        <Navbar
          Auth={Auth} 
          setShowLanding={setShowLanding}
        />
        <Routes>
          <Route path='/' element={
            <div>
              {showLanding && <Landing setShowLanding={setShowLanding} />}
              <Main />
            </div>
          } />   
          <Route path='/user/login' element={user ? <Navigate to="/" /> : <Login />} />
          <Route path='/user/signup' element={user ? <Navigate to="/" /> : <Register />} />
          <Route path='/user/worker' element={<RegisterWorker />} />
          <Route path='/user/my-account' element={<MyAccount />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;