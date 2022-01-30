import { useState } from 'react';
import './styles/App.scss';
import AddWorker from './components/AddWorker';
import Login from './components/Login';
import Main from './components/Main';
import Navbar from './components/Navbar';
import PickDate from './components/PickDate';
import Landing from './components/Landing';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showAddWorker, setShowAddWorker] = useState(false);

  return (
    <div className="App">
      <Navbar 
        setShowLogin={setShowLogin} 
        showLogin={showLogin}
        setShowAddWorker= {setShowAddWorker}
        showAddWorker={showAddWorker}

      />
      {showLogin && 
        <Login 
          setShowLogin={setShowLogin}
          setShowAddWorker= {setShowAddWorker}
          showAddWorker={showAddWorker}
      />}
      {showAddWorker && <AddWorker setShowAddWorker={setShowAddWorker} />}
      <Landing />
      {/**<Main showLogin={showLogin} />**/}
    </div>
  );
}

export default App;