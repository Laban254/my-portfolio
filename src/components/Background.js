import React from 'react';
import Lottie from 'lottie-react';
import nightsky from './LottieFiles/night-sky.json';

const Background = () => {
  return (
    <div className="background-container">
      <Lottie className="background-animation" animationData={nightsky} loop={true} />
    </div>
  );
};

export default Background;
