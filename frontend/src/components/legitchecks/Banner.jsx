import { useEffect, useState, useRef } from 'react';
import backgroundImage from '/src/assets/user/legit-check-page/banner.png';

const Banner = () => {
  const [animate, setAnimate] = useState(false);
  const [currentCount, setCurrentCount] = useState(0);
  const endCount = 12756;
  const styleRef = useRef();
  const legitStyleRef = useRef();

  // Set All Animations Start
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Animation Math Total Legit Check
  useEffect(() => {
    if (animate) {
      let start = 0;
      const duration = 6000;
      const increment = endCount / (duration / 200);

      const counter = setInterval(() => {
        start += increment;
        if (start > endCount) {
          start = endCount;
          clearInterval(counter);
        }
        setCurrentCount(Math.floor(start));
      }, 100);

      return () => clearInterval(counter);
    }
  }, [animate]);

  // Animation "IS YOUR FASHION STYLE ?"
  useEffect(() => {
    if (animate) {
      const animationDuration = 5000;
      const totalSlideInFromLeftDuration = animationDuration * 0;
      styleRef.current.style.animation = `slideInFromLeft ${animationDuration}ms ease-in-out 2`;
      setTimeout(() => {
        styleRef.current.style.animation = `slideInFromLeftEnd 3000ms ease-in-out forwards`;
      }, totalSlideInFromLeftDuration);
    }
  }, [animate]);

  // Animation "LEGIT ?"
  useEffect(() => {
    if (animate) {
      const animationDuration = 5000;
      legitStyleRef.current.style.animation = `slideInFromRight ${animationDuration}ms ease-in-out 2`;
      setTimeout(() => {
        legitStyleRef.current.style.animation = `slideInFromRightEnd 3000ms ease-in-out forwards`;
      }, animationDuration * 0);
    }
  }, [animate]);

  const formatNumber = (number) => number.toString().padStart(5, '0');

  return (
    <div
      className={`p-14 w-full overflow-hidden h-full flex flex-col gap-48 justify-center text-white relative bg-black ${
        animate ? 'bg-animate' : ''
      }`}
    >
      <div
        className="absolute top-0 left-0 z-0 w-full h-full transition-opacity duration-[6000ms] bg-cover bg-opacity-90"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          opacity: animate ? 1 : 0,
        }}
      ></div>

      <div className="z-10 flex flex-col">
        <h1 ref={styleRef} className="w-full uppercase opacity-0 text-7xl">
          Is Your Fashion Style
        </h1>
        <h1
          ref={legitStyleRef}
          className="self-end w-full uppercase opacity-0 text-end text-8xl"
        >
          Legit ?
        </h1>
      </div>
      <div
        className="z-10 flex justify-between"
        style={{
          opacity: 0,
          animation: 'fadeIn 1000ms ease-in-out forwards',
          animationDelay: '2500ms',
        }}
      >
        <div className="flex flex-col gap-3 text-center w-52">
          <p className="text-7xl">{formatNumber(currentCount)}</p>
          <span className="w-full h-1 bg-white"></span>
          <p className="text-3xl uppercase">Total Check</p>
        </div>
        <div className="self-end">
          <p className="text-3xl italic uppercase">Check Below</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
