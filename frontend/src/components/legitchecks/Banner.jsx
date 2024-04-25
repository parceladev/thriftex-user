import { useEffect, useState, useRef } from 'react';
import backgroundImage from '/src/assets/user/legit-check-page/banner.png';
import { fetchTotalLegitChecks } from '../../utils/legit-api-service';

const Banner = () => {
  const [animate, setAnimate] = useState(false);
  const [currentCount, setCurrentCount] = useState(0);
  const [endCount, setEndCount] = useState(0);
  const styleRef = useRef();
  const legitStyleRef = useRef();

  // Set All Animations Start
  useEffect(() => {
    fetchTotalLegitChecks().then((data) => {
      if (data && data.total) {
        setEndCount(data.total);
      }
    });

    const timer = setTimeout(() => setAnimate(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Animation Math Total Legit Check
  useEffect(() => {
    if (animate && endCount > 0) {
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
  }, [animate, endCount]);

  // Animation "IS YOUR FASHION STYLE ?"
  useEffect(() => {
    if (animate) {
      const animationDuration = 1000;
      const totalSlideInFromLeftDuration = animationDuration * 0;
      styleRef.current.style.animation = `slideInFromLeft ${animationDuration}ms ease-in-out 2000ms`;
      setTimeout(() => {
        styleRef.current.style.animation = `slideInFromLeftEnd 2000ms ease-in-out forwards`;
      }, totalSlideInFromLeftDuration);
    }
  }, [animate]);

  // Animation "LEGIT ?"
  useEffect(() => {
    if (animate) {
      const animationDuration = 1000;
      legitStyleRef.current.style.animation = `slideInFromRight ${animationDuration}ms ease-in-out 2000ms`;
      setTimeout(() => {
        legitStyleRef.current.style.animation = `slideInFromRightEnd 2000ms ease-in-out forwards`;
      }, animationDuration * 0);
    }
  }, [animate]);

  return (
    <div
      className={`p-14 mt-16 w-full overflow-hidden h-full flex flex-col gap-48 justify-center text-white relative bg-black ${
        animate ? 'bg-animate' : ''
      }`}
    >
      <div
        className="absolute top-0 left-0 z-0 w-full h-full transition-opacity duration-[3000ms] bg-cover bg-opacity-90"
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
          <p className="text-7xl">{currentCount}</p>
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
