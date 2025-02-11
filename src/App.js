import { AboutSection } from './components/aboutSection/AboutSection';
import { Container } from './components/common/container/Container';

import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { MainSection } from './components/mainSection/MainSection';
import { OfferSection } from './components/offerSection/OfferSection';

function App() {
    return (
        <div>
            <Header />

            <Container>
                <MainSection />

                <OfferSection />

                <AboutSection />
            </Container>

            <Footer />
        </div>
    );
}

export default App;
