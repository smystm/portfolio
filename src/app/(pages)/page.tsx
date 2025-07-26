import HeroSection from '../components/context/HeroSection' 
import IntroSection from '../components/context/IntroSection';
import ShowCase from '../components/context/ShowCase';
import NextSec from '../components/context/FormSection';
import Footer from '../components/context/footer';
import Navbar from '../components/context/navbar';
import { ScrollSpyManager } from '../components/ui/scrollSpyManager';

export default function Page() {
  const ids = ['home', 'about', 'showcase', 'contact'];
  return (
    <div className="page">
        <ScrollSpyManager ids={ids} />
        <Navbar/>
        <HeroSection/>
        <IntroSection/>
        <ShowCase/>
        <NextSec/>
        <Footer/>
    </div>
  );
}
