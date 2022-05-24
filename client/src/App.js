import './styles.scss';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from './pages/Home';
import MyAccount from './pages/MyAccount';
import Services from './pages/Services';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  const Auth = useSelector(state => state.Auth);
  const user = useSelector((state) => state.user.currentUser);

  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />   
            <Route path='/login' element={/**user ? <Navigate to="/" /> : **/ <Login />} />
            <Route path='/register' element={/**user ? <Navigate to="/" /> : **/ <Register />} />
            <Route path='/my-account' element={<MyAccount />} />
            <Route path='/services/:id' element={<Services />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;