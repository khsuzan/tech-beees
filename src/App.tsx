import { Toaster } from './components/ui/sonner';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="size-full">
      <Navigation />
      <Hero />
      <Services />
      <Features />
      <Portfolio />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}