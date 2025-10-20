import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { AboutPage } from './pages/About';
import { PropertiesPage } from './pages/Properties';
import { ServicesPage } from './pages/Services';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Banner } from './components/Banner';


function App() {
  return(
    <Router>
      <Banner />
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
          <Route path='/properties' element={<PropertiesPage />}></Route>
          <Route path='/services' element={<ServicesPage />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App;