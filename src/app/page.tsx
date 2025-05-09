import Image from "next/image";
import HeroSection from '../components/HeroSection/HeroSection' 

export default function Home() {
  return (
    <div className="Home font-[dana] overflow-x-hidden max-w-full bg-[#F3F4F6] dark:bg-[#111827] dark:text-white">
      <HeroSection></HeroSection>
    </div>
  );
}
