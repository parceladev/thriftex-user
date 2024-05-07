const Banner = () => {
  return (
    <section>
      <div className="flex flex-col gap-4 sm:gap-10">
        <h1 className="text-2xl font-bold text-black uppercase sm:text-4xl font-didot sm:mt-28">
          About Thriftex
        </h1>
        <div className="flex items-center gap-5">
          <h5 className="text-lg">Meet the Team</h5>
          <img
            src="../../../public/icons/right-icon-02.svg"
            alt=""
            className="w-10 h-2 sm:h-4 sm:w-20"
          />
        </div>
        <div className="w-full h-[150px] sm:h-screen">
          <img src="../../../public/aboutpage/banner-about.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
