import Navbar from '../../components/Navbar'
import Landing from '../../components/Landing'
import Services from '../../components/Services'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Landing />
      <Services />
    </div>
  )
}

export default Home