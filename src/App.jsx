
/* COMPONENTS */
import ResponsiveNav from './Components/ResponsiveNav/ResponsiveNav';

/* PAGES */
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/Contact/ContactPage';
import ShopPage from './pages/Shop/ShopPage';
import CelularDetail from './pages/CelularDetailPage/CelularDetail';
import CelularMarcaPage from './pages/CelularMarca/CelularMarcaPage';

/* React Router Dom */
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

/* CONTEXT */
import { CelularProvider } from './context/CelularContext';


import './App.css'

const App= () =>  {

  

  return (
    <CelularProvider>
      <Router>
        <div>
          <ResponsiveNav/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/shop' element={<ShopPage/>}/>
            <Route path='/detail/:id' element={<CelularDetail/>}/>
            <Route path='/celular-marca/:marca' element={<CelularMarcaPage/>}/>
          </Routes>
        </div>

      </Router>
    </CelularProvider>
    
    
  );
};

export default App
