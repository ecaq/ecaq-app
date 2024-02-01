import { Outlet } from 'react-router-dom';
import NavBar from './navbar/NavBar';
import Footer from '../../features/components/Footer';



function App() {
  
  
  return (
    <>
    

    <div className="mx-auto">{/* Content goes here */}

      <NavBar />
      <Outlet />

    </div>

    <Footer />
    
    </>

  )
}

export default App