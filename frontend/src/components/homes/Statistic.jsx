import { useEffect, useState } from 'react';
import { fetchTotalLegitChecks } from '../../utils/legit-api-service';

const Statistic = () => {
  const [animate, setAnimate] = useState(false);
  const [currentCount, setCurrentCount] = useState(0);
  const [endCount, setEndCount] = useState(0);

  useEffect(() => {
    fetchTotalLegitChecks().then((data) => {
      if (data && data.total) {
        setEndCount(data.total);
      }
    });

    const timer = setTimeout(() => setAnimate(true), 1000);
    return () => clearTimeout(timer);
  }, []);

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

  return (
    <section className="flex flex-col justify-between w-full md:flex-row">
      <div
        className="w-full md:w-1/2 h-[350px] bg-cover bg-center"
        style={{
          backgroundImage: "url('../../../public/homepage/statistic.png')",
        }}
      ></div>

      <div className="flex flex-col justify-between w-full py-16 gap-14 md:w-1/2">
        <div className="flex justify-center w-full sm:justify-end">
          <p className="text-[15px] max-w-72 text-center sm:text-right">
            MAKING PEOPLE ENJOY WEARING THEIR OUTFITS
          </p>
        </div>
        <div className="flex flex-col justify-center w-full gap-10 text-center sm:text-right">
          <h1 className="uppercase text-8xl sm:text-[150px] text-primary font-didot sm:mb-[-5px]">
            {currentCount}
          </h1>
          <p className="text-xl font-didot mt-[-40px]">TOTAL CHECK</p>
        </div>
      </div>
    </section>
  );
};

export default Statistic;
