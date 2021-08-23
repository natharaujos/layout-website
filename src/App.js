import Navbar from './Components/Navbar/navbar';
import NavbarSup from './Components/NavbarSup';
import Home from './Components/Home/home';
import Card from './Components/Card/card';
import Carousel from './Components/Carousel/carousel'
import Section from './Components/Section/section'
import Cadastro from './Components/Cadastro/cadastro'
import Footer from './Components/Footer/footer'

function App() {
  return (
    <div>
      <div>
        <NavbarSup />
        <Navbar />
      </div>
      <div>
        <Home />
        <Card />
      </div>
      <div>
        <Carousel />
      </div>
      <div>
        <Section />
      </div>
      <div>
        <Cadastro />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
