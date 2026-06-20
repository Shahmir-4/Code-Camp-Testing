import Nav from './components/Nav';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Program from './components/Program';
import Curriculum from './components/Curriculum';
import Pricing from './components/Pricing';
import Signup from './components/Signup';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ViewerTicker from './components/ViewerTicker';

function App() {
  return (
    <div className="min-h-screen pb-12">
      <Nav />
      <Hero />
      <Stats />
      <Program />
      <Curriculum />
      <Pricing />
      <Signup />
      <FAQ />
      <Footer />
      <ViewerTicker />
    </div>
  );
}

export default App;
