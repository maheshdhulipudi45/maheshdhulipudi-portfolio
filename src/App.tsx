import Navbar from './components/Navbar';
import Home from './pages/Home';
import SoftBackdrop from './components/SoftBackdrop';
import Footer from './components/Footer';
import LenisScroll from './components/lenis';
import BackgroundParticles from './components/BackgroundParticles';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
	return (
		<>
			<SoftBackdrop />
			<BackgroundParticles />
			<LenisScroll />
			<Navbar />
			<Home />
			<WhatsAppButton />
			<Footer />
		</>
	);
}
export default App;