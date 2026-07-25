
import CarDetail from './components/pages/CarDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Documents from './components/pages/Documents';
import Calculator from './components/pages/Calculator';
import FloatingButtons from './components/common/FloatingButtons';
import HowWeWork from './components/pages/HowWeWork';
import FAQ from './components/pages/FAQ';
import Guarantees from './components/pages/Guarantees';
import Pricing from './components/pages/Pricing';
import ProcessMap from './components/pages/ProcessMap';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import TermsOfService from './components/pages/TermsOfService';


// Ленивая загрузка страниц
const Home = lazy(() => import('./components/pages/Home'));
const Catalog = lazy(() => import('./components/pages/Catalog'));
const Parts = lazy(() => import('./components/pages/Parts'));
const Services = lazy(() => import('./components/pages/Services'));
const About = lazy(() => import('./components/pages/About'));
const Journal = lazy(() => import('./components/pages/Journal'));
const Contacts = lazy(() => import('./components/pages/Contacts'));

function App() {
  return (
    <BrowserRouter basename="/JDMvl">
      <Header />
      <main>
        <FloatingButtons />
        <Suspense fallback={<div style={{ paddingTop: '80px', textAlign: 'center', color: '#98989D' }}>Загрузка...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/parts" element={<Parts />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/catalog/:id" element={<CarDetail />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/how-we-work" element={<HowWeWork />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/guarantees" element={<Guarantees />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/process-map" element={<ProcessMap />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;