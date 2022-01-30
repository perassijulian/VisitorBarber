import { useState } from 'react';
import './App.scss';
import AddWorker from './components/AddWorker';
import Landing from './components/Landing';
import Main from './components/Main';
import Navbar from './components/Navbar';
import PickDate from './components/PickDate';

function App() {
  const [showLanding, setShowLanding] = useState(false);
  const [showAddWorker, setShowAddWorker] = useState(false);

  return (
    <div className="App">
      <Navbar 
        setShowLanding={setShowLanding} 
        showLanding={showLanding}
        setShowAddWorker= {setShowAddWorker}
        showAddWorker={showAddWorker}

      />
      {showLanding && 
        <Landing 
          setShowLanding={setShowLanding}
          setShowAddWorker= {setShowAddWorker}
          showAddWorker={showAddWorker}
      />}
      {showAddWorker && <AddWorker setShowAddWorker={setShowAddWorker} />}
      <Main showLanding={showLanding} />
    </div>
  );
}

export default App;