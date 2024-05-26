import { useEffect, useState, useRef } from 'react';
import backgroundImage from '../../../public/legitcheckpage/Stan_Smith_Lux_Shoes_White_IG6421_01_standard.avif';
import { fetchTotalLegitChecks } from '../../utils/legit-api-service';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const [animate, setAnimate] = useState(false);
  const [currentCount, setCurrentCount] = useState(0);
  const [endCount, setEndCount] = useState(0);
  const styleRef = useRef();
  const legitStyleRef = useRef();
  const { t } = useTranslation();

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
      className={`sm:p-16 sm:h-screen mt-16 w-full overflow-hidden h-[250px] p-6 flex flex-col gap-48 justify-center text-white relative bg-[#0D1117] ${
        animate ? 'bg-animate' : ''
      }`}
    >
      <div
        className="absolute top-0 left-0 z-0 w-full h-full transition-opacity duration-[3000ms] bg-cover bg-opacity-90 grayscale"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          opacity: animate ? 1 : 0,
          backgroundPosition: 'center 20%',
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      </div>

      <div className="z-10 flex-col hidden sm:mt-20 sm:flex">
        <h1
          ref={styleRef}
          className="w-full uppercase opacity-0 text-6xl font-didot"
        >
          {t('bannerlegit 1')}
        </h1>
        <h1
          ref={legitStyleRef}
          className="self-end w-full uppercase opacity-0 text-end text-9xl font-didot"
        >
          {t('bannerLegit 2')}
        </h1>
      </div>
      <div
        className="z-10 flex justify-center sm:justify-between"
        style={{
          opacity: 0,
          animation: 'fadeIn 1000ms ease-in-out forwards',
          animationDelay: '2500ms',
        }}
      >
        <div className="flex flex-col gap-8 text-center sm:gap-3 w-60">
          <p className="text-7xl sm:text-5xl font-didot">{currentCount}</p>
          <span className="hidden w-full h-1 sm:block border-[2px] border-white"></span>
          <p className="text-xl uppercase sm:text-2xl font-didot">
            {t('bannerLegit 3')}
          </p>
        </div>
        <div className="self-end hidden sm:flex">
          <h4 className="text-3xl uppercase font-didot">
            {t('bannerLegit 4')}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Banner;
