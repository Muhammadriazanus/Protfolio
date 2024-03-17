import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Skill from './Component/Skill';
import Work from './Component/Work';
import Contact from './Component/Contact';
function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Work />
      <Contact />
    </div>


  );
}

export default App;
