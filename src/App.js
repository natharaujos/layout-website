import Navbar from './Navbar/navbar';
import NavbarSup from './NavbarSup';
import Home from './Home/home';

function App() {
  return (
    <div>
      <div>
        <NavbarSup />
        <Navbar />
      </div>
      <div>
        <Home />
      </div>
    </div>
  );
}

export default App;
