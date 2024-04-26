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
    <section className="flex flex-col justify-between w-full mt-4 md:flex-row">
      <div
        className="w-full md:w-1/2 h-[350px] bg-cover bg-center"
        style={{
          backgroundImage: "url('../../../public/homepage/statistic.png')",
        }}
      ></div>

      <div className="flex flex-col justify-between w-full text-right md:w-1/2">
        <div>
          <p className="text-[15px]">
            MAKING PEOPLE ENJOY WEARING THEIR OUTFITS
          </p>
        </div>
        <div>
          <h1 className="uppercase text-9xl text-primary font-didot">{currentCount}</h1>
          <p className="font-roman text-[18px]">TOTAL CHECK</p>
        </div>
      </div>
    </section>
  );
};

export default Statistic;
