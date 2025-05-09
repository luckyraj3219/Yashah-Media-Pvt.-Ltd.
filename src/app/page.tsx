import AboutUs from './components/AboutUs';
import AboveFooter from './components/AboveFooter';
import Blog from './components/Blog';
import Certificates from './components/Certificates';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Vision from './components/Vision';

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Technologies/>
      <Vision />
      <Blog />
      <Certificates/>
      <Projects />
      <ContactForm />
      <AboveFooter />
      <Footer />
    </main>
  );
}
