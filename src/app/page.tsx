'use client'

import HeroSection from '../components/HeroSection/HeroSection' 
import AosInitializer from '../components/librarys/AosInitializer';

export default function Home() {
  return (
    <div className="Home font-[dana] overflow-x-hidden max-w-full bg-[#F3F4F6] dark:bg-[#111827] dark:text-white">

      <AosInitializer></AosInitializer>
      <HeroSection></HeroSection>
      
    </div>
  );
}
