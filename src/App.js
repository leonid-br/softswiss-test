import { AboutSection } from './components/aboutSection/AboutSection';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { MainSection } from './components/mainSection/MainSection';
import { OfferSection } from './components/offerSection/OfferSection';

function App() {
    return (
        <div>
            <Header />

            <MainSection />

            <OfferSection />

            <AboutSection />

            <Footer />
        </div>
    );
}

export default App;
