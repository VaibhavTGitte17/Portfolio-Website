
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import PortFolio from './Components/Portfolio';
import Experiance from './Components/Experience';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
        <Navbar />
        <Home />
        <About />
        <PortFolio />
        <Experiance />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;
