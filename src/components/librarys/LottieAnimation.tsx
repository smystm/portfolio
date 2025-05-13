'use client';

import Lottie from 'lottie-react';
import animationData from '../../../public/lottie/rocketprg.json';

const RocketProg = () => {
  return (
    <div className="w-[300px] md:w-[400px]">
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export {RocketProg}; 