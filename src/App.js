
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Navbar } from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Contact/>
      <NotFound/>
    </div>
  );
}

export default App;
