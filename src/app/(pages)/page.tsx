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
    <div className="page font-[dana] overflow-x-hidden max-w-full bg-[#F3F4F6] dark:bg-[#111827] dark:text-white scroll-smooth text-transparent">
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
