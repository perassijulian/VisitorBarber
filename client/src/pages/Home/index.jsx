import Navbar from '../../components/Navbar'
import Landing from '../../components/Landing'
import Services from '../../components/Services'
import { useState } from 'react';

const Home = () => {
  const [showLanding, setShowLanding] = useState(true);
  return (
    <div className='home'>
      <Navbar />
      {showLanding && <Landing setShowLanding={setShowLanding} />}
      <Services />
    </div>
  )
}

export default Home