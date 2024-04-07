const Statistic = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between w-full mt-4">
      <div
        className="w-full md:w-1/2 h-[350px] bg-cover bg-center"
        style={{
          backgroundImage: "url('../../../public/homepage/statistic.png')",
        }}
      ></div>

      <div className="w-full md:w-1/2 flex justify-between flex-col text-right">
        <div>
          <p className="text-[15px]">
            MAKING PEOPLE ENJOY WEARING THEIR OUTFITS
          </p>
        </div>
        <div>
          <h1 className="text-9xl text-primary font-didot uppercase">0000</h1>
          <p className="font-roman text-[18px]">TOTAL CHECK</p>
        </div>
      </div>
    </section>
  );
};

export default Statistic;
