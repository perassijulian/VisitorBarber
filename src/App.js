import { useState } from 'react';
import './App.scss';
import AddWorker from './components/AddWorker';
import Landing from './components/Landing';
import Main from './components/Main';
import Navbar from './components/Navbar';
import PickDate from './components/PickDate';

function App() {
  const [showLanding, setShowLanding] = useState(false);
  return (
    <div className="App">
      <Navbar setShowLanding={setShowLanding} showLanding={showLanding}/>
      {showLanding && <Landing setShowLanding={setShowLanding} />}
      <AddWorker />
      <Main showLanding={showLanding} />
    </div>
  );
}

export default App;